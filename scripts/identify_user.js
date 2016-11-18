var Segment = require('machinepack-segment');

var userID = ARGS['userID'];

// Identify a user by her unique id and a set of associated traits.
Segment.identify({
  writeKey: '<YOUR_SEGMENT_WRITE_KEY>',
  userId: userID,
  traits: {},
  integrations: {},
}).exec({
  // An unexpected error occurred
  error: function (error){

  },
  // Success
  success: function (){
    console.log('Success');
  }
});
