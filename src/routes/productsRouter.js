import {Router } from "express"
import { productsCollection } from "../db";
import { productInsertionValidation } from "../middleware/productsValidation";
import { insertProduct, getProduct } from "../controlers/productController";

const productsRoute = Router()

productsRoute.post("/produts",productInsertionValidation, insertProduct)
productsRoute.get("/products", getProduct);

export default productsRoute