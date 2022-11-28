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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));