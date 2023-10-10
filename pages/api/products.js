import { connect } from "@/dbconfig/dbConfig";
import { Product } from "@/models/db";

connect();

export default async function handler(req, res) {
    const product = await Product.find({})
    res.json({message: "hello", data: product})
  }