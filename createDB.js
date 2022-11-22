var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
        var database = client.db("ProjectSmeshariki");
        database.dropDatabase()
        database = client.db("ProjectSmeshariki");
        const Smeshariki= database.collection("Smeshariki");
        const result = await Smeshariki.insertOne({ name: "Нюша" });
        console.log(`${result} documents were inserted`);
    } finally {
        await client.close();
    }
}
run()