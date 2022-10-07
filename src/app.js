import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/products', (req, res) => {
  res.send([{
    name: 'default product',
    description: 'product description',
    price: 100
  }]);
})

export default app;

