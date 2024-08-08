const express = require("express");
const Product = require("../models/productModel.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController.js');

// ruta para obtener todos los productos
router.get('/', getProducts);

// ruta para obtener un producto por id
router.get("/:id", getProduct);

// ruta para crear un producto
router.post("/", createProduct);

// ruta para modificar un producto
router.put("/:id", updateProduct);

// ruta para eliminar un producto
router.delete("/:id", deleteProduct);

module.exports = router;
