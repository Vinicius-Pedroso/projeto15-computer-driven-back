import {productsCollection} from "../db.js"

export async function insertProduct(req, res){
    const product = res.locals.product

    try{
        await productsCollection.insertOne(product)
        res.sendStatus(200)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}


export async function getProduct(){
    try{
        const allProducts = productsCollection.find().toArray()
        res.status(200).send(allProducts)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}