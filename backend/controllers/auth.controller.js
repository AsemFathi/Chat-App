import User from "../models/user.model.js";
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

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.log("Error", error.message);
        res.status(500).json({ error: "internal error" });
    }
}

export const Login = (req, res) => {
    console.log("Login Func");
}

export const Logout = (req, res) => {
    console.log("Logout Func");
}
