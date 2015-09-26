/**
 * The entry point for this project. Starts the tracker daemon.
 */

// dependencies
var _ = require('lodash');
var async = require('async');
var config = require('app-config');
var floorball = require('./lib/floorball-api');

var gameTimes = {}; // last updated
var gameEvents = {}; // last updated

var mainLoop = function() {
  // get games currently in progress
  floorball.get('/games/upcoming/' + config.main.statGroupId).on('complete', findLiveGames);

};

var findLiveGames = function(result) {
  // filter games in progress from all upcoming games
  var liveGames = _.filter(result.games, function(game) { return game.inProgress; });

  async.each(liveGames, updateGames, function() {
    console.log(gameTimes);
    console.log(gameEvents);
  });
};

var updateGames = function(game, callback) {
  var gameURI = '/game/' + game.game + '/' + config.main.statGroupId;
  floorball.get(gameURI).on('complete', function(game) {

    var gameID = game.meta.gameID;
    var gameName = game.meta.homeTeam + ' - ' + game.meta.awayTeam;
    var prevGameTime = gameTimes[gameID] || 0;
    var prevGameEvents = gameEvents[gameID] || {};

    var newEvents = _.filter(game.events, function(event) { return !_.contains(prevGameEvents, event.eventID) });

    _.forEachRight(newEvents, function(event) {
      //console.log('Event #' + event.eventID);
      switch(event.appEventType) {

        case 'goal':
          var team = event.teamAbbrv;
          var scorer = event.scorerFirstName + ' ' + event.scorerLastName;
          var score = event.homeGoals + '-' + event.awayGoals;
          console.log(gameName + ': ' + score + '! Score for ' + team + ' by ' + scorer);
          break;

        case 'penalty':
          // we don't care about penalties
          break;

        case 'periodBreak':
          console.log(gameName + ': ' + 'End of period #' + event.period);
          break;

        default:
          console.log('New event: ' + event.type);
          break;
      }
    });

    var currGameTime = game.meta.gameEffTime;
    gameTimes[gameID] = currGameTime;
    gameEvents[gameID] = _.map(game.events, function(event) { return event.eventID; } );

    callback();
  });
};

// entry point
var start = function() {
  console.log('Starting the Floorball Live Tracker...');

  // main loop
  setInterval(mainLoop, config.main.interval);
  mainLoop();

};

// Automatically call the main function if we're the main module
if (require.main === module) {
  start();
}
