const env = require('dotenv').config();
const mysql = require('mysql');


let connections = mysql.createConnection({
    host : process.env.HOST,
    database : process.env.DBNAME,
    user : process.env.USER,
    password : process.env.DBPASS,
    Port : process.env.DBPORT
});


connections.connect((err) => {
    if(err) throw err;
    else {
        console.log('successfully connected database');
    }
});


module.exports = connections;