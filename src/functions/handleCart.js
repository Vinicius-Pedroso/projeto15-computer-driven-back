import db from '../db.js'

export async function postCartAlteration (req, res){

    const data = req.body
    if (data.remove === false){

        try{

            await db.collection("sessions").updateOne({productId: data.productId}, {$set:{quantity: quantity + data.modify}})
            return res.sendStatus(201)
    
        } catch (error){
            console.error(error);
            return res.sendStatus(500);
        }

    }

    try{

        await db.collection("sessions").removeOne({productId: data.productId})
        return res.sendStatus(201)

    } catch (error){
        console.error(error);
        return res.sendStatus(500);
    }
}

export async function getCartProducts (req, res){
    
    const user = res.locals.user;

    try {
        const cartProducts = await db.collection("sessions")
        .find({ user: user._id })
        .toArray();

        res.send(cartProducts);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}