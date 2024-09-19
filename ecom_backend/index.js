const express = require("express");
const app = express();
const userRoutes = require("./apis/users/index");
const collectionRoutes = require("./apis/collections/index");
const subCollectionRoutes = require("./apis/sub_collections/index");
const productRoutes = require("./apis/products/index");

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectDB = require("./db_connect/db");

require("dotenv").config();
const dbPath = process.env.mongo_url;
const portNumber = process.env.portnumber || 8888;
const { connect } = require("mongoose");

app.use("/api/user", userRoutes);
app.use("/api/collection", collectionRoutes);
app.use("/api/subCollection", subCollectionRoutes);
app.use("/api/product", productRoutes);


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