export async function authRoutesValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
  
    if (!token) {
      return res.sendStatus(401);
    }
  
    try {
      const session = await sessionsCollection.findOne({ token });
      if (!session) {
        return res.sendStatus(401);
      }
      const user = await usersCollection.findOne({ _id: session?.userId });
      if (!user) {
        return res.sendStatus(401);
      }
  
      res.locals.user = user;
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  
    next();
  }