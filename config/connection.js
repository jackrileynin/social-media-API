const { connect, connection } = require('mongoose');

// Connect to the Mongo DB

connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-api', {
  //useCreateIndex: true,  //makes sure indexes are created using the latest version of mangodb methods, not the pre 3.0 version ensureIndex.
  //useFindAndModify: false // prevents the use of a deprecated method
});


module.exports = connection;