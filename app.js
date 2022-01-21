const PORT = process.env.PORT || 5000
const path = require('path')
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const cors =require('cors');
const uri = "mongodb+srv://UserInfo:user@cluster0.9rp5m.mongodb.net/user?retryWrites=true&w=majority"
const url = "mongodb+srv://payment:payment@cluster0.9rp5m.mongodb.net/user?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const cl = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

const http = require('http')
const server = http.createServer(app)
const fetch = require('node-fetch');
//onst { response } = require('express');
//const io = require('socket.io')(http)
const {Server} = require('socket.io')
const io = new Server(server)
//require('./models/socket')(io)
const dir = path.join(__dirname, "public")
const key = 'Bearer sk_test_7630419ba6e85b83cb9677f9a28290f57c325836'

app.use(cors())
// const dirName = path.join(__dirname, 'public')
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json({limit : '1mb'}));
app.set('view engine', 'pug')

//Posting to the database
app.post('/insert', async (request, response, next) => {
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
    response.redirect(path.join(__dirname, 'public')+ '/success.html')
})

//chat api
app.get('/chat', (req, res)=>{
    res.render('user')

})

app.post('/room', (req, res) =>{
    user = req.body.username
    Pass = req.body.password
    res.redirect(`/roomdirect?username =${username}$roomname =${roomname}`)
})

//The chat redirect
app.get('/roomdirect', (req, res) =>{
    res.set({'Allow-Control-Allow-Origin': '*'});
    const dir = path.join(__dirname, '/public')
    console.log(dir)
    res.sendFile(dir + '/chat.html')

})

io.on('connection', (socket)=>{
    console.log('user joined')
})
//Get from the database
app.get('/send', async(req, res, next) => {
    res.set({'Allow-Control-Allow-Origin':'*'});
    Listing = req.query
    array = Object.values(Listing)
    const profess = array[0]
    nameOfListing=profess
    console.log(nameOfListing)  
    
    try{
        await client.connect().then(console.log('connection to Database successful:'))
        const returnData = await findOnelistingByName(client, nameOfListing)
       // console.log(returnData)
    
       res.render("display", (err, html) =>{
           res.send(html)
       })
    //    response.json(returnData)


    }

    catch(e){
        
        console.error(e)
    }finally{
        console.log('Done:')
        await client.close()
    }
})
// payment credentials
//const formData = {}

var raw = JSON.stringify({
    "email": "meelisfidelis@gmail.com",
    "amount": "10000",
    "metadata": {
      "custom_fields": 
        {
          "value": "makurdi",
          "display_name": "Donation for",
          "variable_name": "donation_for"
        }
    
    },
    "card": {
      "cvv": "408",
      "number": "4084084084084081",
      "expiry_month": "01",
      "expiry_year": "99"
    },
    "pin": "0000"

})
  
const options = {
    method :'POST',
    headers: {
        Authorization: key,
        'Content-Type': 'application/json'
    },
    body:raw,
    redirect:'follow'
}

const verify = {
    method :'GET',
    headers: {
        Authorization: 'Bearer sk_test_7630419ba6e85b83cb9677f9a28290f57c325836',
        
    },
    redirect:'follow'
}




//payment

//pay with bank
app.get('/vaiBank', async(request, response)=>{
    const params = JSON.stringify({ 

        "email": "customer@email.com", 
      
        "amount": "10000",
      
        "bank": {
      
          "code": "057",
      
          "account_number": "0000000000"
      
        }
      
    })
    var myHeaders = {
        method :'POST',
        "Authorization": key,
        'Content-Type': 'application/json'
    }

})
app.get('/pay', async (req, res)=>{
    var myHeaders = {
        "Authorization": key,
        'Content-Type': 'application/json'
    }

    // var urlencoded = JSON.stringify({
    //     "amount" : "500000",
    //     "email" : "customer@gmail.com",
    //     "authorization_code": accessCode
    // })
    // console.log(urlencoded)

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };   
    let responseCharge = await fetch('https://api.paystack.co/charge', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))

        // let responseInt = await fetch('https://api.paystack.co/charge', options)
        // let data = await responseInt.json()
        // console.log(responseInt)
        // const val = Object.values(data.data)
        // const urlpass = val[0]
        // const accessCode = val[1]
        // const reference = val[2]

        // console.log(reference)
        // console.log(accessCode)
        // console.log(urlpass)
    
    
    // await fetch(`https://api.paystack.co/transaction/verify/${reference}`, verify)
    // .then(response => response.text())
    // .then(result=> console.log(result))
    // .catch(error => console.log('error', error))



   

//     await fetch("https://api.paystack.co/transaction/charge_authorization", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
        
})
    
//Functions for the database
async function createListing(client, newListing){
    const result = await client.db("Link").collection("users").insertOne(newListing)
    console.log(`new listing created with the following id: ${result._id}`)
}

async function findOnelistingByName(client, nameOfListing){
    const result = await client.db("Link").collection("users").find({Profession : nameOfListing}).sort({name: 1})
    .toArray()
    //console.log(Object.entries(result).length)
    //console.log(result.length)

    if (result) {
        console.log(`Found listing in the collection with the name ${nameOfListing}`)
        return result  
    }else if (result.lenght == 0){
        console.log(`No listing found in the collection with the profession ${nameOfListing}`)
        var none = []
        return none
    }
}

app.listen(PORT, () => {
    console.log(`server is working ${PORT}`)
})