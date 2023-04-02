const mysql = require('mysql2');

config = {
    host: 'localhost',
    user: 'root',
    password: '193243up',
    database: 'cs1',
    port: 3306
}

const conn = mysql.createConnection(config)
// Conecta a la base de datos
conn.connect(function (err){
    if(err) throw err;
    console.log('se connecto ')
})
module.exports = conn;