const sqlite3 = require("sqlite3").verbose();
const url = require("url");

// open the database
const db = new sqlite3.Database("./public/hp.db");

const sql = `SELECT location, modelnumber as 'events' FROM 'lastyear' `;

export default async function handle(req, res) {
  const queryObject = url.parse(req.url, true).query;

  if (queryObject["type"] === 'all') {
    db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        })
    } else {
        res.json({})
    }
}
