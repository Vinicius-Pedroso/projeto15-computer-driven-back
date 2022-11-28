import {productsCollection} from "../db.js"

export async function insertProduct(req, res){
    const product = req.body

    try{
        await productsCollection.insertOne(product)
        res.sendStatus(200)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}


export async function getProduct(req,res){
    try{
        const allProducts = await productsCollection.find().toArray()
        res.status(200).send(allProducts)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}