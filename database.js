const mysql = require('mysql2');
const config = require('./config');

const connection = mysql.createConnection(config.db);

function createTable(conn){
    const sql = `CREATE TABLE IF NOT EXISTS forms_answers(
                 Id serial NOT NULL AUTO_INCREMENT PRIMARY KEY,
                 name text NOT NULL,
                 email varchar(255) NOT NULL,
                 cpf text NOT NULL,
                 phone text NOT NULL,
                 created_at date NOT NULL,
                 UNIQUE KEY unique_email(email)
                 );`;
    
    conn.query(sql, (error, results, fields) => {
        if(error) return console.log(error);
        console.log('Table created!');
    });
}

connection.connect((err) => {
    if(err) return console.log(err);
    console.log('Connected!');
    createTable(connection);
})