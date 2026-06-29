const Booking =
require("../models/bookingModel");


// CREATE BOOKING
const createBooking =
async (req,res)=>{

    try{

        const booking =
        new Booking(req.body);

        await booking.save();

        res.json({

            success:true,

            message:
            "Booking Successful"

        });

    }
    catch(error){

        res.json({

            success:false,

            message:
            "Booking Failed"

        });

    }

};


// VIEW BOOKINGS
const getBookings =
async (req,res)=>{

    try{

        const bookings =
        await Booking.find();

        res.json(bookings);

    }
    catch(error){

        res.json({

            success:false,

            message:
            "Cannot Fetch Bookings"

        });

    }

};


module.exports = {

    createBooking,
    getBookings

};