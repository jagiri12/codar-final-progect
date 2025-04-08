const express = require("express");
const { getproduct, postproduct, addcart, getcart, deleteCartItem } = require("../controllers/generalcontroller");
const { checkout } = require("../controllers/checkoutcontroller");
const { protected } = require("../middlewares/authorization");
const { upload } = require("../middlewares/pictureaupload");
const router = express.Router();

router.get("/products", getproduct);
router.post("/product", protected, upload, postproduct);
router.post("/cart/:productid", protected, addcart);
router.get("/cart", protected, getcart);
router.delete("/deletecart/:cartItemId", deleteCartItem);
router.post("/checkout", protected, checkout);

module.exports = router;
