const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

const connectDB = async () =>{
    try{
        await mongoose.connect(db);

        console.log("mongoDB connected.");
    }catch (err) {
        console.error(err.message);
    }
}

module.exports = connectDB;