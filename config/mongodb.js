const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// const url = "mongodb://localhost:27017";
// const url = "mongodb://cluster0-shard-00-00.qs4pi.mongodb.net:27017";
const url =
  "mongodb+srv://handiangga:hand14.w@cluster0.qs4pi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database Name
const dbName = "BlogApplication";

let db;

function connect(callback) {
  client.connect((err) => {
    if (err) {
      console.log(err);
      console.log("not connected");
      //   callback(err)
    } else {
      console.log(`success`);
      db = client.db(dbName);
      //   callback(null)
    }
  });
}

function getDatabase() {
  return db;
}

module.exports = { connect, getDatabase };
