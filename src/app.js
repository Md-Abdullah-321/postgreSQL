const express = require("express");
const personRouter = require("./routers/personRouter");
const app = express();


app.use(express.json());
app.use("/api/person", personRouter);



module.exports = app;