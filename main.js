import mongoose from "mongoose"
// console.log("everythin looks fine!")

async function getConnection(){
    await mongoose.connect('mongodb://localhost:27017/aggregation');
}

getConnection()

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

const Person = mongoose.model('persons', PersonSchema);

Person.find()
    .then(docs => {
        //console.log(`docs => ${JSON.stringify(docs, null, 4)}`)
        if(Array.isArray(docs) && docs.length > 0){
            docs.map( doc => console.log(`Name => ${doc.name}`))
        }
    })
    .catch(err => console.error(err))

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));