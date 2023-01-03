const db = require('../database/db.js')

const getPhotos = async (styleid) => {

}

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
        console.log(data);
        let photos = [];
        let skus = [];

        for (let index = 0; index < data.results.length; index++) {
          console.log('hey');
          console.log(`SELECT url, thumbnail_url from photos WHERE styleid = ${data.results[index].style_id}`)
          return db.query(`SELECT url, thumbnail_url from photos WHERE styleid = ${data.results[index].style_id}`)
            .then((result) => {
              console.log('not error');
              console.log(result.rows);
              photos.push(result.rows);
            })
            .catch((error) => {
              console.log('error');
              console.log(error);
            })
          return db.query(`SELECT id, size, quantity FROM sku WHERE styleiid = ${data.results[i].style_id}`)
            .then((result) => {
              skus.push(result.rows);
            })
            .catch((error) => {
              console.log(error);
            })
        }
        console.log(photos);
        console.log(skus);
        setTimeout(10000);
        return data;
      })
      .catch((error) => {
        return error;
      })
  },
  queryRelated: (product_id) => {

  },
}



// queryStyles: (product_id) => {
//   let data = { product_id };
//   return db.query(`SELECT id AS style_id, name, original_price, sale_price, default_style FROM styles WHERE productID = ${product_id}`)
//     .then((result) => {
//       data.results = result.rows;
//       console.log(data);
//       let photos = [];
//       let skus = [];

//       for (let index = 0; index < data.results.length; index++) {
//         console.log('hey');
//         console.log(`SELECT url, thumbnail_url from photos WHERE styleid = ${data.results[index].style_id}`)
//         return db.query(`SELECT url, thumbnail_url from photos WHERE styleid = ${data.results[index].style_id}`)
//           .then((result) => {
//             console.log('not error');
//             console.log(result.rows);
//             photos.push(result.rows);
//           })
//           .catch((error) => {
//             console.log('error');
//             console.log(error);
//           })
//         return db.query(`SELECT id, size, quantity FROM sku WHERE styleiid = ${data.results[i].style_id}`)
//           .then((result) => {
//             skus.push(result.rows);
//           })
//           .catch((error) => {
//             console.log(error);
//           })
//       }
//       console.log(photos);
//       console.log(skus);
//       setTimeout(10000);
//       return data;
//     })
//     .catch((error) => {
//       return error;
//     })
// }