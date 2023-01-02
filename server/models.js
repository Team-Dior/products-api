const db = require('../db')

module.exports = {
  queryProducts: (page, count) => {
    return db.query(`SELECT * FROM products WHERE id > ${(page - 1) * count} AND id < ${(page * count) + 1}`)
      .then((result) => {
        return result.rows;
      })
      .catch((error) => {
        return error;
      })
  },
  queryProduct: (product_id) => {

  },
  queryStyles: (product_id) => {

  },
  queryRelated: (product_id) => {

  },
}