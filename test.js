const viceDB = require("./src/index.js");

const db = new viceDB({
    filePath: "./vicedb/database.json",
    dataLog: true
})

db.set('Vice', "Dev");
console.log(db.get('Vice'));
