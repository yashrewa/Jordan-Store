import { connect } from "@/dbconfig/dbConfig"
import { Product, Category } from "@/models/db"



connect()
export default async function handler(req, res) {
    const categories = await Category.find({}).populate('product')
    res.json({message: 'success', data: categories})
}
