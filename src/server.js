import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import checkoutRoute from "./routes/checkoutRouter.js"
import productsRoute from "./routes/productsRouter.js"
import userRouter from "./routes/userRouter.js"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(checkoutRoute)
app.use(productsRoute)
app.use(userRouter)

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});