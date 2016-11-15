var Segment = require('machinepack-segment');

// Track a user action by triggering an event in Segment.
Segment.track({
  writeKey: 'KZemN7saUWWoHz12T7dgaWBu4wWlJpTY',
  userId: '019mr8mf4r',
  event: 'foobarbaz',
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