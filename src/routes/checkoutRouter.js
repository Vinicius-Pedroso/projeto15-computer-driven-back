import { Router } from "express";

const checkoutRoute = Router()

checkoutRoute.post("/cart", postTransaction);
checkoutRoute.get("/cart", postTransaction);

export default checkoutRoute
