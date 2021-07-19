const PORT = process.env.PORT || 5000

const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const cors =require('cors');
const uri = "mongodb+srv://UserInfo:user@cluster0.9rp5m.mongodb.net/user?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
app.listen(PORT, () => {
    console.log(`server is working ${PORT}`)
})

app.use(cors())
app.use(express.static('public'))
app.use(express.json({limit : '1mb'}));


//
app.post('/insert',  async (request, response, next) => {
    newListing = request.body;
    response.set({'Allow-Control-Allow-Origin': '*'});
    
    console.log("I got a request");
    console.log(request.body)
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
    response.json({
        status : 'success'
    })
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
        await client.connect().then(console.log('connection to Database successful:'))
        const returnData = await findOnelistingByName(client, nameOfListing)
        response.json(returnData)
    }

    catch(e){
        console.error(e)
    }finally{
        console.log('connected')
        await client.close()
    }
})

  

//Functions for the database

async function createListing(client, newListing){
    const result = await client.db("Link").collection("users").insertOne(newListing)
    console.log(`new listing created with the following id: ${result._id}`)
}

async function findOnelistingByName(client, nameOfListing){
    const result = await client.db("Link").collection("users").find({Profession : nameOfListing}).sort({name: 1 })
    .toArray()
    

    if (result) {
        console.log(`Found a listing in the collection with the profession "${nameOfListing}"`)
        return result
    }else {
        console.log(`"No listing found in the collection with the name "${nameOfListing}"`)
    }
}