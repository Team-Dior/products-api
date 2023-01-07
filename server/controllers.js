const models = require('./models');

module.exports = {
  getProducts: (req, res) => {
    const page = req.body.page || 1;
    const count = req.body.count || 5;
    models.queryProducts(page, count)
      .then((result) => res.status(200).send(result))
      .catch((error) => res.status(500).send(error))
  },
  getProduct: (req, res) => {
    models.queryProduct(req.params.product_id)
      .then((result) => res.status(200).send(result))
      .catch((error) => res.status(500).send(error))
  },
  getStyles: (req, res) => {
    models.queryStyles(req.params.product_id)
      .then((result) => res.status(200).send(result))
      .catch((error) => res.status(500).send(error))
  },
  getRelated: (req, res) => {
    models.queryRelated(req.params.product_id)
      .then((result) => res.status(200).send(result))
      .catch((error) => res.status(500).send(error))
  }
};


