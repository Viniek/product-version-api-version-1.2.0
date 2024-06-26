import { Router }from 'express';

const router=Router();
router.get('/',(req,res)=>{
    res.send("getting all products...")
})
router.get("/:id",(req,res)=>{
    res.send("getting a single product...")
})
router.post("/:id",(req,res)=>{
    res.send("creating a single product...")
})
router.patch("/:id",(req,res)=>{
    res.send("updating a single product...")
})
router.delete("/:id",(reg,res)=>{
    res.send("deleting a single product...")
})
export default router;