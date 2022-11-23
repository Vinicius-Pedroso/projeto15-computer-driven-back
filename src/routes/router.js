import express from 'express';
import { login, signUp } from '../controlers/authControler';
import { validationLogin } from '../middlewere/validationLogin';
import { validationSignUp } from '../middlewere/validationSignUp';

const router = express.Router();
router.post("/login", validationLogin , login)
router.post("/Signup", validationSignUp ,signUp);
router.get("/products", getTransaction);
router.post("/cart", postTransaction)
router.get("/cart", postTransaction)
export default router;
