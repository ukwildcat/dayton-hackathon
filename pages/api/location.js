const sqlite3 = require("sqlite3").verbose();
const url = require("url");

// open the database
const db = new sqlite3.Database("./public/hp.db");


export default async function handle(req, res) {
    const queryObject = url.parse(req.url, true).query;
    let sql = `SELECT DISTINCT location, modelnumber, count(*) as 'events' FROM 'lastyear' where location = \'${queryObject["store"]}\' LIMIT 0,200`;
    console.log(sql);

  if (queryObject["store"].length > 0 && queryObject["type"].length === 0) {
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
    });
  } else if (queryObject["store"].length > 0 && queryObject["type"] === "product") {
    sql = `select product, count(product) as 'count' from lastyear l where location = \'${queryObject["store"]}\' and product != '' and event='cycleStart' GROUP BY product`;
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      console.log(rows.length);
      res.json(rows);
    });
  } else {
    res.json({});
  }
}


//select product, count(product) as 'count' from lastyear l where location = '02173' and product != '' and event='cycleStart' GROUP BY product