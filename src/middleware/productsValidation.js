import { productSchema } from "../schemas/productSchema";

export async function productInsertionValidation(req, res, next){
    const product = req.body

    const { error } = productSchema.validate(product, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
  
    res.locals.product = product;
  
    next();
}