const sqlite3 = require("sqlite3").verbose();
const url = require("url");

// open the database
const db = new sqlite3.Database("./public/hp.db");


export default async function handle(req, res) {
    const queryObject = url.parse(req.url, true).query;
    const sql = `SELECT DISTINCT location, modelnumber, count(*) as 'events' FROM 'lastyear' where location = \'${queryObject["store"]}\' LIMIT 0,200`;
    console.log(sql);

  if (queryObject["store"].length > 0) {
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
    });
  } else {
    res.json({});
  }
}
