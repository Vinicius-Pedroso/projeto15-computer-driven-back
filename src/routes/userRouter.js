import express from 'express';
import { login, signUp } from '../controlers/authControler.js';
import { validationLogin } from '../middlewere/validationLogin.js';
import { validationSignUp } from '../middlewere/validationSignUp.js';

const userRouter = express.Router();
userRouter.post("/login", validationLogin , login)
userRouter.post("/signup", validationSignUp ,signUp);


export default userRouter;
