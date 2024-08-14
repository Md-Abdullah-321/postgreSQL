const express = require("express");
const { connnectDB } = require("./db");
const app = express();



app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connnectDB();
})