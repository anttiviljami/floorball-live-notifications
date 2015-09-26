/**
 * The entry point for this project. Starts the tracker daemon.
 */

// dependencies
var _ = require('lodash');
var config = require('app-config');

// entry point
var start = function() {
  console.log('Starting the Floorball Live Tracker...');

  // update the
  setInterval(mainLoop, config.main.interval);

}

var mainLoop = function() {
  console.log('Looping...');
}

// Automatically call the main function if we're the main module
if (require.main === module) {
  start();
}
