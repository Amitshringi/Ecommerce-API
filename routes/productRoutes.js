const express=require('express');
const router=express.Router();
const productController=require('../controllers/productController');

// Add a new product
router.post('/create', productController.createProduct);

// List all products
router.get('/', productController.listProducts);

// DELETE /api/products/:id
router.delete('/:id', productController.delete);

// Update quantity of a product
router.post('/:id/update_quantity',productController.updateProductQuatity );



console.log('router loaded');

module.exports=router;