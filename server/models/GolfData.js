const mongoose = require('mongoose');

/*People DB Schema*/
const GolfSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required:true,
    },
    date: {
        type:Date,
        required:true,
    },
    coursePlayed: {
        type:String,
        required:true,
    },
    score: {
        type:Number,
        required:true,
    },
    userNotes: {
        type:String,
    },
});

const Golf = mongoose.model("GolfData",GolfSchema)
module.exports = Golf;