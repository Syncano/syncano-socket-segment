var Segment = require('machinepack-segment');

var userID = ARGS['userID'];
var event = ARGS['event'];

// Track a user action by triggering an event in Segment.
Segment.track({
  writeKey: '<YOUR_SEGMENT_WRITE_KEY>',
  userId: userID,
  event: event,
  properties: {},
  integrations: {},
}).exec({
  // An unexpected error occurred
  error: function (){

  },
  // Success
  success: function (){
    console.log('Success');
  }
});
