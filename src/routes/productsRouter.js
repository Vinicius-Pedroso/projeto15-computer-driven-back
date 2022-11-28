import {Router } from "express"
import { productsCollection } from "../db.js";
import { productInsertionValidation } from "../middleware/productsValidation.js";
import { insertProduct, getProduct } from "../controlers/productController.js";

const productsRoute = Router()

productsRoute.post("/products",productInsertionValidation, insertProduct)
productsRoute.get("/products", getProduct);

export default productsRoute