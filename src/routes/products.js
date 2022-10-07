import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send([{ 
    name: 'default product', 
    description: 'product description', 
    price: 100
  }])
});

export default router;