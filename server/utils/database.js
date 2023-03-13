const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const url = process.env.MONGODB_URI;
const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });

client.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database.');
});

module.exports = client;
