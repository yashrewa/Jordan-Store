import { connect } from "@/dbconfig/dbConfig";
import { Product } from "@/models/db";

connect();

export default async function handler(req, res) {
    // const slug = req.params.slug;
    const { slug } = req.query
    const product = await Product.findById(slug)
    console.log(product)
    res.json({message: "hello", data: product})
  }
  