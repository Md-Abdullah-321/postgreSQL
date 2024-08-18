const { executeQuery } = require("../../db");



const handleGetAllPersons = async (req, res, next) => {
    try {
        const persons = await executeQuery('SELECT * FROM person;');
        res.status(200).json({persons: persons});
    } catch (error) {
        next(error);
    }
}


const handleCreatePerson = async (req, res, next) => {
    try {
        const { first_name, last_name, email, gender, date_of_birth } = req.body;

        const person = await executeQuery(
            `INSERT INTO person (first_name, last_name, gender, date_of_birth, email) 
            VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
            [first_name, last_name, gender, date_of_birth, email]
        );

        res.status(201).json({
            message: "New person has been created successfully.",
            payload: person
        });
    } catch (error) {
        next(error);
    }
}




module.exports = {handleGetAllPersons, handleCreatePerson}