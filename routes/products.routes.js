import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();
// get all products
router.get('/',async (req, res) => {
 try{

const products=await prisma.products.findMany();
res.status(201).json(products);
 }catch(error){
    res.status(500).json({success:false,message:error.message})
 }
});
// get single product
router.get("/:id", async(req, res) => {
    const id=req.params.id;
try{
   const products=await prisma.products.findFirst({
    where:{product_id :id},
        select:{
            product_id:true,
            product_title:true,
            product_description:true,
            product_Cost:true,
            onOffer:true
        }
    
   })
   if(!products){
    res.status(500).json({success:false,message:"OOPS!!Product not found"})
   }else{
   res.status(200).json(products) 
   }
}catch(error){
    res.status(500).json({success:false,message:error.message});
}
});

// post
router.post("/", async (req, res) => {
  try {
    const { product_id, product_title, product_description, product_Cost, onOffer } = req.body;
    const newProduct = await prisma.products.create({
      data: {
        product_id: product_id, // Remove this if using default UUID
        product_title: product_title,
        product_description: product_description,
        product_Cost: product_Cost,
        onOffer: onOffer, // Ensure this is processed as a boolean
      },
      select:{
        product_id: true,
        product_title: true,
        product_description:true,
        product_Cost:true,
        onOffer: true,
      }
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
// patch
router.patch("/:id", async(req, res) => {
    const { product_id, product_title, product_description, product_Cost, onOffer } = req.body;
    const id=req.params.id;
    try{
        let updatedUser;
            if(product_id){
                updatedUser=await prisma.products.update({
                    where:{product_id:id},
                    data: {product_id:product_id}
                })
            }


            if(product_title){
                updatedUser=await prisma.products.update({
                    where:{product_id:id},
                    data: {product_title:product_title}
                })
            }

            if( product_description){
                updatedUser=await prisma.products.update({
                    where:{product_id:id},
                    data: { product_description: product_description}
                })
            }

            if(  product_Cost){
                updatedUser=await prisma.products.update({
                    where:{product_id:id},
                    data: {  product_Cost:  product_Cost}
                })
            }

            if( onOffer){
                updatedUser=await prisma.products.update({
                    where:{product_id:id},
                    data: { onOffer: onOffer}
                })
            }
        res.status(200).json({success:true,message:'hurray!!updated successfully'})

    }catch(error){
        res.status(500).json({success:false,message:error.message})
    }
});
// delete
router.delete("/:id", async(req, res) => {
  const id=req.params.id;
  try{
    const deleteProduct=await prisma.products.delete(
    {
        where:{product_id:id}
    }
        // where:{product_id: id}
        // select:{
        //     product_id: true,
        //     product_title:true,
        //     product_description:true,
        //     product_Cost:true,
        //     onOffer: true,
        //   }
    );
res.status(201).json({success:true,message:"hurray!!product deleted"})
  }catch(error){
    res.status(500).json({success:false,message:error.message})
  }
});

export default router;
