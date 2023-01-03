const db = require('../database/db.js')



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
    return db.query(`SELECT * FROM products WHERE id=${product_id}`)
      .then((result) => {
        let data = result.rows.pop();
        return db.query(`SELECT feature, value FROM features WHERE product_id=${product_id}`)
          .then((result) => {
            data.features = result.rows;
            return data;
          })
      })
      .catch((error) => {
        return error;
      })
  },
  queryStyles: (product_id) => {
    let data = { product_id };
    return db.query(`SELECT id AS style_id, name, original_price, sale_price, default_style FROM styles WHERE productID = ${product_id}`)
      .then((result) => {
        data.results = result.rows;

        return Promise.all(
          data.results.map(async (style) => {
            await db.query(`SELECT url, thumbnail_url from photos WHERE styleid = ${style.style_id}`)
            .then((result) => {
              style.photos = result.rows;
            })
            .catch((error) => {
              console.log(error);
            })
          })
        ).then(() => {
          return Promise.all(
            data.results.map(async (style) => {
              await db.query(`SELECT id, size, quantity FROM skus WHERE styleid = ${style.style_id}`)
              .then((result) => {
                style.skus = result.rows.length
                ? result.rows.reduce((acc, sku) => {
                  acc[sku.id] = { quantity: sku.quantity, size: sku.size };
                  return acc;
                }, {})
                : { null: { quantity: null, size: null } }
              })
            })
          )
          .then(() => {
            return data;
          })
        })
      })
      .catch((error) => {
        return error;
      })
  },
  queryRelated: (product_id) => {
    return db.query(`SELECT related_product_id FROM related WHERE current_product_id = ${product_id}`)
      .then((result) => {
        return data = result.rows.map((row) => {
          return row.related_product_id;
        })
      })
      .then((data) => {
        return [...new Set(data)];
      })
  },
}
