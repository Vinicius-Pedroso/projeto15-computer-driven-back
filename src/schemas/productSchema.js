import joi from "joi"


export const productSchema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.string().required(),
    imgUrl: joi.string().domain().required()
})