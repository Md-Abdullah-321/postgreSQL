const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "abdullah",
    port: 5432,
    password: "123456",
    database: "test"
});

const executeQuery = async (query, params = []) => {
    try {
        const client = await pool.connect();
        const res = await client.query(query, params);
        client.release();
        return res.rows;
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

module.exports = {
    executeQuery,
}
