const express = require("express");
const Product = require("../models/product");

// GET all products or filtered products
exports.getProducts = async (req, res) => {
    try {
        const filter = req.query; // รับค่า query parameters
        const products = await Product.find(filter);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET single product by ID
exports.getProduct = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({
            message: 'Product not found'
        });
        res.json(product);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// POST new product
exports.postProducts = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// PUT update product
exports.putProducts = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        });
        if (!updatedProduct) return res.status(404).json({
            message: 'Product not found'
        });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// DELETE product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({
            message: 'Product not found'
        });
        await Product.findByIdAndDelete(id);
        res.json({
            message: 'Product deleted successfully'
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};