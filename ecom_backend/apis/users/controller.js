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
        const { page, limit, sortOptions } = req.pagination;
        const skip = (page - 1) * limit;

        const users = await User.find()
            .where("is_admin", false)
            .where("is_deleted", false)
            .sort(sortOptions)
            .skip(skip)
            .limit(limit);

        const totalItems = await User.countDocuments();

        if (users.length > 0) {
            resp.status(200).json({
                data: users,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(totalItems / limit),
                    totalItems: totalItems,
                    pageSize: limit
                }
            });
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
        let user = await User.findById(_id).where("is_admin", false).where("is_deleted", false);
        if (user) {
            resp.status(200).json(user);
        } else {
            resp.status(404).json({ message: "User not Found" })
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const updateUser = async (req, resp) => {
    const { id, first_name, last_name, address, phone_number, email } = req.body;
    try {
        const user = await User.findById(id).where("is_deleted", false);
        if (user) {
            user.first_name = first_name;
            user.last_name = last_name;
            user.address = address;
            user.phone_number = phone_number;
            user.email = email;
            user.updated_at = Date.now();
            await user.save();
            resp.status(200).json({ message: `${user.first_name} ${user.last_name} hast been updated` })
        } else {
            resp.status(404).json({ message: 'User not found' })
        }
    } catch (error) {
        resp.status(400).json({ message: error.message })
    }
};

const softDeleteUser = async (req, resp) => {
    try {
        const user = await User.findById(req.body.id).where("is_admin", false);
        if (user) {
            user.is_deleted = true;
            await user.save();
            resp.status(200).json({ message: `${user.first_name} ${user.last_name} hast been deleted` })
        } else {
            resp.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const changePassword = async (req, resp) => {
    const { id, password, new_password } = req.body;
    try {
        const user = await User.findById(id).where("is_admin", false).where("is_deleted", false);
        if (user.password == password) {
            user.password = new_password;
            await user.save();
            resp.status(200).json({ message: 'Password changed' });
        } else {
            resp.status(404).json({ message: 'Incorrect Password' });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

const setNewAdmin = async (req, resp) => {
    const { id } = req.body;
    try {
        const user = await User.findById(id).where("is_deleted", false);
        if (user) {
            user.is_admin = true;
            await user.save();
            resp.status(200).json({ message: 'is_admin set to true' });
        } else {
            resp.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

module.exports = { signUp, login, getAllUsers, getUser, updateUser, softDeleteUser, changePassword, setNewAdmin };