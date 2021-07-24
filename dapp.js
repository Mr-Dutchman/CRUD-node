const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
// const Db = require('./Db')
// var {MongoClient, main, client, connect} = require('./Db')
const cors =require('cors');
const uri = "mongodb+srv://UserInfo:user@cluster0.9rp5m.mongodb.net/user?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});


//


app.use(express.json({limit : '1mb'}));

client.connect().then(res => {
    app.use(cors())
    app.use(express.static('public'))
    
    app.listen(3000, () => console.log('server is working'))

}).catch(err => {
    console.log(err)
})

//
app.post('/insert',  async(request, response) => {
    
    try {

        newListing = request;
        response.set({'Allow-Control-Allow-Origin': '*'});
        
        console.log("I got a request");
        console.log(newListing)
    
     // .then(console.log('connection to Database successful:'))
        let response = await createListing(client, newListing)
        response.json({
        status : 'success'
    })
    } catch(err){
        console.log(err)
    }
  

    
})

// get get info
app.get('/send', async (request, response, next) => {
    response.set({'Allow-Control-Allow-Origin':'*'});
    Listing = request.query
    array = Object.values(Listing)
    const profess = array[0]
    nameOfListing=profess
    console.log(nameOfListing)   
    
    try{
        const returnData = await findOnelistingByName(client, nameOfListing)
        response.json(returnData)
    }

    catch(e){
        console.error(e)
    }
})

  

//Functions for the database

function createListing(client, newListing){
    return client.db("Link").collection("users").insertOne(newListing)
}

function findOnelistingByName(client, nameOfListing){
    return client.db("Link").collection("users").find({Profession : nameOfListing}).sort({name: 1 })
    .toArray();
    
}
