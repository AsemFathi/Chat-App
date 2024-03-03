import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import bcryptjs from "bcryptjs"

export const Signup = async (req, res) => {
    try {
        const {
            fullName,
            username,
            password,
            confirmPassword,
            gender
        } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        // HASH Password here

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        // get image from this https://avatar.iran.liara.run/public/boy

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
        });
        if (newUser) {
            //Generate JWT TOken 
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({ message: "User created successfully" });
        }
        else {
            res.status(400).json({ error: "Invalid user data" });

        }

    } catch (error) {
        console.log("Error", error.message);
        res.status(500).json({ error: "internal error" });
    }
}

export const Login = async (req, res) => {
    console.log("Login Func");
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            res.status(400).json({ error: "Invalid username or password" });
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("Error", error.message);
        res.status(500).json({ error: "internal error" });
    }

}

export const Logout = (req, res) => {
    console.log("Logout Func");
}

