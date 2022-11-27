import express from 'express';
import { login, signUp } from '../controlers/authControler';
import { postCartAlteration } from '../functions/handleCart';
import { validationLogin } from '../middlewere/validationLogin';
import { validationSignUp } from '../middlewere/validationSignUp';

const router = express.Router();
router.post("/login", validationLogin , login)
router.post("/Signup", validationSignUp ,signUp);
router.get("/", getProductions);
router.post("/cart", postCartAlteration)
router.get("/cart", postCart)
export default router;
