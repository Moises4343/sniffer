const mysql = require('mysql2');

config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cs1',
    port: 8889
}

const conn = mysql.createConnection(config)
// Conecta a la base de datos
conn.connect(function (err){
    if(err) throw err;
    console.log('se connecto ')
})
module.exports = conn;