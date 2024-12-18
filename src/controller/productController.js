const Product = require("../model/product")

  const getProducts = async (req,res) =>{
    const products = await Product.find();
    if(products.length === 0) return await res.status(400).send("No products");
    return await res.status(200).send(products);
  }

  const getProductByid = async (req,res) =>{
    const id = req.params.id;
    const product = await Product.findById({_id: id});
    console.log(product);
    if(!product) return await res.status(400).send("Product not found");
    await res.status(200).send(product);
  }

  const createProduct = async (req,res) =>{
    const Data = req.body;
    const product = new Product(Data);;
    await product.save();
    if(!product) return res.status(400).send("unable to create");
    res.status(201).send(product);
  }

  const updateProduct = async (req,res) => {
    const id= req.params.id;
    const {name, price,quantity} = req.body;
    const product = await Product.findById(id);
    if(!product) return res.status(400).send("product not found");
    const upProduct = await Product.findByIdAndUpdate(id,{name, price,quantity}, {new: true});
    res.status(200).send(upProduct);
  }

  const deleteProduct = async (req,res) => {
    const {id}= req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product) return await res.status(400).send("product not found");
    await res.status(200).send("product deleted");
  }



module.exports = {getProducts, getProductByid, createProduct, updateProduct, deleteProduct};