const mongoose = require("mongoose")

const DBconnect = async()=>{

try {
await mongoose.connect('mongodb://localhost:27017/dbtest')
console.log("database is connected")
} catch (error){
if(error){
    console.log(`can not connect to database${error}`);
}

};


}
module.exports = DBconnect;