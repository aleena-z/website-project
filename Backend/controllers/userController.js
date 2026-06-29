const User = require("../models/User");

const registerUser = async (req, res) => {
    try {
        const { username, email, password, phone, address, dob } = req.body;

        if (username.length < 3) {
            return res.json({ message: "Username too short" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ message: "Email already exists" });
        }

        const newUser = new User({ username, email, password, phone, address, dob });
        await newUser.save();

        res.json({ message: "User Registered Successfully" });

    } catch (error) {
        res.json({ message: "Server Error" });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation: check empty fields
        if (!email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "No account found with this email" });
        }

        // Check password (plain text match)
        if (user.password !== password) {
            return res.json({ success: false, message: "Incorrect password" });
        }

        // Login successful — send user data (excluding password)
        res.json({
            success: true,
            message: "Login Successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone || "Not provided",
                address: user.address || "Not provided",
                dob: user.dob || "Not provided"
            }
        });

    } catch (error) {
        res.json({ success: false, message: "Server Error" });
    }
};

module.exports = { registerUser, loginUser };
