const express = require("express");
const router = express.Router();

const {
    getProducts,
    getProduct,
    postProducts,
    putProducts,
    deleteProduct
} = require("../controllers/productcontroller");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", postProducts);
router.put("/:id", putProducts);
router.delete("/:id", deleteProduct);

module.exports = router;