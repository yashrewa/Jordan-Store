import { connect } from "@/dbconfig/dbConfig"
import { Product, Category } from "@/models/db"



connect()
export default async function handler(req, res) {
    const catName = req.query.slug
    const categoryProducts = await Category.findOne({name: catName}).populate('product')
    res.json({message: "success", data: categoryProducts})
    // console.log(categoryProducts)
    // console.log(catName)
}
