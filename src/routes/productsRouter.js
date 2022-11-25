import {Router } from "express"

const productsRoute = Router()

productsRoute.get("/products", getTransaction);

export default productsRoute