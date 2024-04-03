import express from "express";
import Productcontroller from "../controller/Productcontroller.js";
const router = express.Router();

router.post("/add-product",Productcontroller.saveproductdata);
router.get("/products",Productcontroller.getallproducts);

export default router;


