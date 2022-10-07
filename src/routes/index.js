import express from 'express';
import ProductsRoute from './products'

const router = express.Router();

router.use('/products', ProductsRoute);

router.get('/', (req, res) => 
  { 
    res.send('Hello World!')
  })
export default router;
