const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes =require("./routes/bookingRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/bookings",bookingRoutes);


app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});

const User = require("./models/User");

app.get("/test-users", async (req, res) => {
    const users = await User.find();
    console.log(users);
    res.json(users);
});