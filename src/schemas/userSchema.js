import joi from "joi"

export const userSchema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().email().required().min(3),
    password1: joi.string().required().min(3),
    password2: joi.string().required().min(3).valid(joi.ref('password1'))
});    