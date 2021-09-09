import mongoose from "mongoose"

async function getConnection(){
    // TODO => 1. replace aggregation with the name of the database to be connected
    await mongoose.connect('mongodb://localhost:27017/aggregation');
}

getConnection()

/* TODO => 2. replace the object passed to schema to represent the structure 
of the collection you want to connect*/
const PersonSchema = mongoose.Schema({
    "index": Number,
    "name": String,
    "isActive": Boolean,
    "registered": Date,
    "age": Number,
    "gender": String,
    "eyeColor": String,
    "favoriteFruit": String,
    "company": {
        "title": String,
        "email": String,
        "phone": String,
        "location": {
            "country": String,
            "address": String
        }
    },
    "tags": [String]
});

/* TODO => 3. We have 2 things here
1. Person is the name of the name of model. Which you can use to add, 
read, update or delete documents
2. persons is the name of the collection you want to connect/create.*/
const Person = mongoose.model('persons', PersonSchema);

Person.find()
    .then(docs => {
        //console.log(`docs => ${JSON.stringify(docs, null, 4)}`)
        if(Array.isArray(docs) && docs.length > 0){
            docs.map( doc => console.log(`Name => ${doc.name}`))
        }
    })
    .catch(err => console.error(err))
