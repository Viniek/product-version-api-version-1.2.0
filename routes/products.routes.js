import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', (req, res) => {
  res.send("getting all products...");
});

router.get("/:id", (req, res) => {
  res.send("getting a single product...");
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
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.patch("/:id", (req, res) => {
  res.send("updating a single product...");
});

router.delete("/:id", (req, res) => {
  res.send("deleting a single product...");
});

export default router;
