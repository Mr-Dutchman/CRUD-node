const db = require('mongodb');
const MongoClient = require('mongodb').MongoClient

// module.exports ={
//     findOnelistingByName : async function findOnelistingByName(client, nameOfListing){
//     const result = await client.db("Admin").collection("user").findOne({name: nameOflisting})

//     if (result) {
//         console.log(`Found a listing in the collection with the name "${nameOfListing}"`)
//         console.log(result)
//     }else {
//         console.log(`"No listing found in the collection with the name "${nameOflisting}"`)
//     }
// }
//}

// async function insertMultipleListing(client, newListing){
//     const result = await client.db("Admin").collection("users").insertMany(newListing)
//     console.log(`$(result.insertCount) new listing was created with the following id ($):`)
//     console.log(result.insertedIds)
// }


// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases()

//     console.log("Databases:")
//     databasesList.databases.forEach(db =>{
//         console.log(`-${db.name}`)
//     })
// }

module.exports = {
    MongoClient, 
    connect : async ,
    createListing : async function(client, newListing){
        await client.db("userInfo").collection("user").insertOne(newListing)
        console.log("new listing created with the following id: ${result.insertId}")
     }
    
    // main().catch(console.error)
}
