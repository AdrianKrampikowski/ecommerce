const express = require("express");
const app = express();
const userRoutes = require("./apis/users/index");

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectDB = require("./db_connect/db");

require("dotenv").config();
const dbPath = process.env.mongo_url;
const portNumber = process.env.portnumber || 8888;

const userController = require("./apis/users/controller");
const { connect } = require("mongoose");

app.use("/api/user", userRoutes);

const start = async () => {
    try {
        await connectDB(dbPath);
        app.listen(portNumber, () => {
            console.log(`Port is running on ${portNumber}`);
        });
    } catch (err) {
        console.error("Error", err.message)
    }
}

start();

