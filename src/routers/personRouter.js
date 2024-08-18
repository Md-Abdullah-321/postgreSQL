const express = require("express");
const { handleGetAllPersons, handleCreatePerson } = require("../controllers/personController");
const personRouter = express.Router();


personRouter.get("/", handleGetAllPersons);
personRouter.post("/", handleCreatePerson);



module.exports = personRouter;