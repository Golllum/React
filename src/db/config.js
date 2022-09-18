var mysql = require('mysql');

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'thddydwns!2',
    database : 'test_jpa'
});

module.exports = db;