var Segment = require('machinepack-segment');

var userID = ARGS.GET['userID'];
var event = ARGS.GET['event'];

// Track a user action by triggering an event in Segment.
Segment.track({
  writeKey: 'KZemN7saUWWoHz12T7dgaWBu4wWlJpTY',
  userId: userID,
  event: event,
  properties: {},
  integrations: {},
}).exec({
  // An unexpected error occurred
  error: function (error){
    console.error(error);
  },
  // Success
  success: function (response){
    console.log(response);
  }
});
