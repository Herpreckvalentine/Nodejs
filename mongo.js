var MongoClient = require('mongodb').MongoClient;
var db;
var connected = false;

module.exports = {
  connect: function(url, callback){
    MongoClient.connect(url, function(err, client){
      if (err) { throw new Error('Could not connect: '+err); }
      
      db = client.db(dbName);;
      connected = true;
      
      callback(db);
    });
  },
  collection: function(name){
    if (!connected) {
      throw new Error('Must connect to Mongo before calling "collection"');
    }
    
    const d = db.collection(name);
    return d;
  }
};