var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/chukwurah_victor_db"

MongoClient.connect(url, function(err, db) {
    if (err) throw err
    console.log('Database created by Chukwurah Victor!')
    db.close()
})