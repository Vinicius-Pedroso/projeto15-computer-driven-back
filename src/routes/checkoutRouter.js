import { Router } from "express";
import { postCartAlteration, getCartProducts } from "../controlers/handleCartController.js";


const checkoutRoute = Router()

checkoutRoute.post("/cart", postCartAlteration);
checkoutRoute.get("/cart", getCartProducts);

export default checkoutRoute
