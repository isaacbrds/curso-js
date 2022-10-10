class ProductsController{
  get(req,res){
    return res.send([{
      name: 'default product',
      description: 'product description',
      price: 100
    }])
  }
}

export default ProductsController;