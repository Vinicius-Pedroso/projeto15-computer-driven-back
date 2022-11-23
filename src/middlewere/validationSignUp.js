import joi from 'joi'

export function validationSignUp(req, res, next) {
    const user = req.body;

    const userSchema = joi.object({
        name: joi.string().required().min(3),
        email: joi.string().email().required().min(3),
        password: joi.string().required().min(3),
    });
  
    const { error } = userSchema.validate(user, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
  
    res.locals.user = user;
  
    next();
}
