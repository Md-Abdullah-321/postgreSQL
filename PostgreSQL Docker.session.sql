
-- Table without constraints 

-- CREATE TABLE person (
--     id INT,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     gender VARCHAR(6),
--     date_of_birth TIMESTAMP
-- )





-- Table with constraints 

-- CREATE TABLE person (
--     id BIGSERIAL NOT NULL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     gender VARCHAR(5) NOT NULL,
--     date_of_birth DATE NOT NULL
-- );





-- ADD NEW COLUMN TO EXISTING TABLE     

-- ALTER TABLE person 
-- ADD COLUMN email VARCHAR(50) NOT NULL;





-- INSERT DATA INTO TABLE

-- INSERT INTO person (first_name, last_name, gender, date_of_birth, email)
-- VALUES
-- (
--     'Md',
--     'Abdullah',
--     'Male',
--     '2000-08-11',
--     'abdullah.dev.it@gmail.com'
-- );
