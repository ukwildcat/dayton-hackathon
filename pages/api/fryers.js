const sqlite3 = require("sqlite3").verbose();
const url = require("url");

// open the database
const db = new sqlite3.Database("./public/hp.db");

let sql = `select location, serialnumber, count(*) as 'events' from lastyear group by serialnumber`;

export default async function handle(req, res) {
  const queryObject = url.parse(req.url, true).query;

  if (queryObject["type"] === 'all') {
    db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        })
    } else if (queryObject["type"] === "logs") {
    let sql = `select event, timestamp, location, modelnumber, serialnumber, errorcount from lastyear LIMIT 100`;
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
