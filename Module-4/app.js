// const express = require('express')//third party package
// const { MongoClient } = require('mongodb');
import express from "express"
import { MongoClient } from "mongodb"
import bodyParser from "body-parser"

const app = express()
const PORT = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


const MONGO_URL = 'mongodb://127.0.0.1:27017'
//'mongodb://localhost:27017';

//mongodb connection 

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect()
    console.log("Mongodb is connected")
    return client;
}

const client = await createConnection()

// req => what we send to server
// res => what we receive from server
app.get('/', function (req, res) {
    res.send('Hello Everyone')
})

//get all movies
app.get('/getMovies', async function (req, res) {
    const result = await client.db("node_may").collection("movies").find().toArray()//put document inside array
    res.send(result)
})


//add new movies
app.post('/addMovies', async function (req, res) {
    const newMovies = req.body
    console.log(newMovies)
    const result = await client.db("node_may").collection("movies").insertOne(newMovies)
    res.send(result)
})


app.listen(PORT, () => console.log('The server started on the port', PORT))