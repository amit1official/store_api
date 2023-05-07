const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
require("./conn");
const Store = require('./storeSchema');
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello form the other side");

})

// create a new product
app.post('/store', async (req, res) => {
    try {
        const product = new Store(req.body);
        const createProduct = await product.save()
        res.status(200).send(createProduct)
    } catch (error) {
        res.status(400).send(error)
    }
})

// get the all products
app.get('/store',async (req,res)=>{
    try {
        const productsData = await Store.find();
        res.send(productsData);
    } catch (error) {
        res.send(error)
    }
})

// get the indicisual productData by Id
app.get('/store/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const productData = await Store.findById({_id});
        if(!productData){
            res.status(400).send("Invalid Data");
        }
        else{
            res.send(productData);
        }
    } catch (error) {
        res.send(error);
    }
})

// Update a product by id
app.patch('/store/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const updateProduct = await Store.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateProduct)
    } catch (error) {
        res.status(400).send(error); 
    }
})

// Delete the product by id 
app.delete('/store/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const deleteProduct = await Store.findByIdAndDelete(_id);
        if(!deleteProduct){
            res.status(400).send()
        }
        res.send("Delete Product Successfully")
    } catch (error) {
        res.status(500).send(error); 
    }
})

// create a new Order
app.post('/store', async (req, res) => {
    try {
        const newOrder = new Store(req.body);
        const createNewProduct = await newOrder.save()
        res.status(200).send(createNewProduct)
    } catch (error) {
        res.status(400).send(error)
    }
})

// get the all orders
app.get('/store',async (req,res)=>{
    try {
        const ordersData = await Store.find();
        res.send(ordersData);
    } catch (error) {
        res.send(error)
    }
})

// get the order product by Id
app.get('/store/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const orderData = await Store.findById({_id});
        if(!orderData){
            res.status(400).send("Invalid Data");
        }
        else{
            res.send(orderData);
        }
    } catch (error) {
        res.send(error);
    }
})
app.listen(port, () => {
    console.log(`Connection is setup on ${port}`);
})