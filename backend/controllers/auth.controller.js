import UserModel from "../models/user.model.js"; 
import generateTokenAndSetCookie from "../utils/GenerateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

       // Check for missing fields
        if (!fullname || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "All fields are required" });
            console.log(res.error);
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Define default profile picture based on gender
        const profilePic = gender === "male"
            ? `https://avatar.iran.liara.run/public/boy?username=${username}`
            : `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create new user
        const newUser = new UserModel({
            fullname,
            username,
            password,
            gender,
            profilePic,
        });

        // Save the new user to the database
        await newUser.save();

        // Generate JWT and set in cookie
        generateTokenAndSetCookie(newUser._id, res);

        // Send success response
        return res.status(200).json({ message: "New User Added successfully", newUser });
    } catch (error) {
        console.error("Error creating new user: ", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username });

        // Check if user exists and passwords match
        if (!user || user.password !== password) {
            return res.status(400).json({ error: "Invalid Username or Password" });
        }

        // Generate JWT and set in cookie
        generateTokenAndSetCookie(user._id, res);

        return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Error during login: ", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// Logout function
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Error during logout: ", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
