import db from '../db.js'

export async function PostProductCart (req,res){
    const data = req.body
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        return res.sendStatus(401);
    }

    try {

        const productsData = await db.collection("products").findOne({id: data.id})
        await db.collection("sessions").findOne({ token }).insertOne(productsData, {$set:{quantity: data.quantity}})
        return res.sendStatus(201)
    

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}
