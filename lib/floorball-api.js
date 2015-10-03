'use strict';

/**
 * Wrapper for the floorball.fi api requests
 *
 * The API has been designed not to return simple JSON but always wraps the response in a function call
 */

require('dotenv').load();
var rest = require('restler');

var get = function(url) {
  return rest.get(process.env.FLOORBALL_API_URL + url, {parser: floorballParser, agent: 'A bot watching floorball (https://github.com/anttiviljami/floorball-live-notifications)'});
};

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
};

module.exports = {
  get: get
};
