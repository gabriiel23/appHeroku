const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel.js");
const productRoute = require("./routes/productRoute.js");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose.connect('mongodb://localhost:27017/?directConnection=true')
    .then(() => {
        console.log('Conectado a MongoDB');
        app.listen (3000, () => {
            console.log("Server corriendo en el puerto 3000");
        });
    })
    .catch(() => {
        console.log('Coneccion Fallida');
    });