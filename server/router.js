const router = require('express').Router();
const { getProducts, getProduct, getStyles, getRelated } = require('./controllers');

router.get('products', getProduct);

router.get('products/:product_id', getProduct);

router.get('products/:product_id/styles', getStyles);

router.get('products/:product_id/related', getRelated);

module.exports = router;