var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
var database = client.db("smeshariki");
database.dropDatabase()
database = client.db("smeshariki");
const cats = database.collection("fauna");
const result = await cats.insertMany(data);
console.log(`${result.insertedCount} documents were inserted`);

    } finally {
        await client.close();
    }
}
run()