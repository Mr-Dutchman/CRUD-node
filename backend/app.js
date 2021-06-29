const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
// const Db = require('./Db')
// var {MongoClient, main, client, connect} = require('./Db')
const cors =require('cors');



//

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}



app.use(cors())
app.use(express.static('public'))
app.use(express.json({limit : '1mb'}));


//
app.post('/insert', (request, response, next) => {
    newListing = request.body;
    response.set({'Allow-Control-Allow-Origin': '*'});
    
    console.log("I got a request");
    console.log(request.body)

    connect()    
    async function connect(){
        const uri = "mongodb+srv://UserInfo:user@cluster0.9rp5m.mongodb.net/user?retryWrites=true&w=majority"
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
    
        try{
            await client.connect()
            // .then(console.log('connection to Database successful:'))
            await createListing(client, newListing)
        }
    
        catch(e){
            console.error(e)
        }finally{
            //console.log('connected')
            await client.close()
        }
    }

    response.json({
        status: 'success'
    })

    
})

// get get info
app.post('/send', (request, response, next) => {
    // Profession = request.body;
    Listing = request.body
    array = Object.values(Listing)
    nameOfListing =array[0]
    response.set({'Allow-Control-Allow-Origin':'*'});
    console.log(nameOfListing)
    // response.end()
// })


// app.post("/", (request, response, next)=> {
//     response.set({'Allow-Control-Allow-Origin': '*'})
//     console.log(request.body)
    
    

    connect()    
    async function connect(){
        const uri = "mongodb+srv://UserInfo:user@cluster0.9rp5m.mongodb.net/user?retryWrites=true&w=majority"
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
    
        try{
            await client.connect()
            //.then(console.log('connection to Database successful:'))
            await findOnelistingByName(client, nameOfListing)
        }
    
        catch(e){
            console.error(e)
        }finally{
            //console.log('connected')
            await client.close()
        }
    }
    response.json({
        success : true
    })
    
})




    

async function createListing(client, newListing){
    const result = await client.db("Link").collection("users").insertOne(newListing)
    console.log(`new listing created with the following id: ${result.insertId}`)
}

async function findOnelistingByName(client, nameOfListing){
    const result = await client.db("Link").collection("users").findOne({Profession: nameOfListing})

    if (result) {
        console.log(`Found a listing in the collection with the name "${nameOfListing}"`)
        console.log(result)
    }else {
        console.log(`"No listing found in the collection with the name "${nameOfListing}"`)
    }
}

app.listen(8000, () => console.log('server is working'))