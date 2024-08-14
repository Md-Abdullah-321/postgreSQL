
const {Client} = require("pg");

const connnectDB = () => {
    const client = new Client({
        host: "localhost",
        user: "abdullah",
        port: 5432,
        password: "123456",
        database: "test"
    });

    client.connect();

    client.query(`SELECT * FROM person`, (err, res) => {
        if(!err){
            console.log(res.rows);
        }else {
            console.log(err.message);
        }

        client.end;
    });
}

module.exports = {
    connnectDB,
}