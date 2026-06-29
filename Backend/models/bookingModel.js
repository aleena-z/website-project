const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    fullname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    destination:{
        type:String,
        required:true
    },

    travelDate:{
        type:String,
        required:true
    },

    persons:{
        type:Number,
        required:true
    }

});

module.exports =
mongoose.model("Booking", bookingSchema);