const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/loaderio-59ef9a8c53445f9dbf70819ed463be6c/', (req, res) => {
  res.status(200).send('loaderio-59ef9a8c53445f9dbf70819ed463be6c');
})

router.get('/products', controllers.getProducts);

router.get('/products/:product_id', controllers.getProduct);

router.get('/products/:product_id/styles', controllers.getStyles);

router.get('/products/:product_id/related', controllers.getRelated);

module.exports = router;