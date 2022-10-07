import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(3000, ()=>{
  console.log('App listening on port 3000');
})

