import express from 'express';
import productsRouter from './routes/products.routes.js';
import{config }from 'dotenv';
config();

const app=express();
app.use(express.json())
app.use("/products",productsRouter)

app.listen(3008,()=>{
    console.log("app running on port 3000....");
})