const User = require("./model");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const signUp = async (req, resp) => {
    try {
        let user = new User(req.body);
        let existUser = await User.where("email").equals(req.body.email).exec();
        if (existUser.length > 0) {
            resp.status(400).json({ message: "User already exist" });
        } else {
            await user.save();
            resp.status(200).json(user);
        }
    } catch (error) {
        resp.status(400).json({ message: error.message })
    }
};

const login = async (req, resp) => {
    try {
        const user = req.body;
        const userQuery = await User.where("email").equals(user.email).exec();
        if (userQuery.length <= 0 || userQuery[0].password != user.password) {
            resp.status(401).json({ message: "incorrect Username or Password" })
        } else if (userQuery[0].status == "false") {
            resp.status(401).json({ message: "User is not active" })
        } else if (userQuery[0].password == user.password) {
            const response = { email: userQuery[0].email, role: userQuery[0].role }
            const acessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: "10h" });
            resp.status(200).json({ token: acessToken, role: userQuery[0].role })
        } else {
            resp.status(400).json({ message: "Something went wrong" })
        }
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};

const getAllUsers = async (req, resp) => {
    try {
        let users = await User.find({}).where("is_admin").equals(false).exec();
        if (users.length > 0) {
            resp.status(200).json(users);
        } else {
            resp.status(404).json({ message: "No User Found" });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const getUser = async (req, resp) => {
    const { _id } = req.body;
    try {
        let user = await User.findById(_id).where("is_admin").equals(false).exec();
        if (user) {
            resp.status(200).json(user);
        } else {
            resp.status(404).json({ message: "User not Found" })
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
}

module.exports = { signUp, login, getAllUsers, getUser };