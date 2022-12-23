const mongoos = require('mongoose');

mongoose.connect('mongodb://localhost/products');

const products = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [{features: String, value: String}]
});

const styles = mongoose.Schema({
  productID: { type: Number, unique: true },
  results: [{
    style_id: Number,
    name: String,
    original_price: Number,
    sale_price: Number,
    default_style: Boolean,
    photos: [{thumbnail_url: String, url: String}],
    skus: { sku_id: { quantity: Number, size: String}}
  }]
});

const related = mongoose.Schema({
  productID: { type: Number, uniqie: true },
  related: [ Number ]
})