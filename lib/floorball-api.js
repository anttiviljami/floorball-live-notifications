/**
 * Wrapper for the floorball.fi api requests
 *
 * The API has been designed not to return simple JSON but always wraps the response in a function call
 */
var config = require('app-config');
var rest = require('restler');

var get = function(url) {
  return rest.get(config.main.apiURL + url, {parser: floorballParser});
}

var floorballParser = function(data, callback) {
  if (data && data.length) {
    var parsedData;
    try {
      // the response json is wrapped inside response(<json>)
      var json = data.substring(9, data.length - 1);
      parsedData = JSON.parse(json);
    } catch (err) {
      err.message = 'Failed to parse JSON body: ' + err.message;
      callback(err, null);
    }
    if (parsedData !== undefined) {
      callback(null, parsedData);
    }
  } else {
    callback(null, null);
  }
}

module.exports = {
  get: get
}
