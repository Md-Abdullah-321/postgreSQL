# PostgreSQL and Adminer Docker Setup With important Commands

Welcome to the PostgreSQL and Adminer Docker setup project! This project aims to provide a simple and efficient environment for learning and exploring PostgreSQL using Docker containers. This setup includes PostgreSQL as the database server and Adminer as the web-based database management tool.

## Project Overview

- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Adminer**: A lightweight and easy-to-use database management tool that provides a web interface for interacting with databases.

## Getting Started

### Prerequisites

- **Docker**: Ensure Docker is installed on your machine. You can download Docker from [Docker's official website](https://www.docker.com/products/docker-desktop).
- **Docker Compose**: Comes bundled with Docker Desktop. If you’re using Docker Engine, you can install Docker Compose separately from [Docker Compose's official documentation](https://docs.docker.com/compose/install/).

### Setting Up the Environment

1. **Clone the Repository**

   First, clone the repository or create a new directory for your project:

   ```sh
   git clone https://github.com/Md-Abdullah-321/postgreSQL.git
   cd postgreSQL
   ```

2. **Use to run postgreSQL command on terminal**

   ```sh
   docker run -it --rm --network host postgres psql -h localhost -U <username> -d <dbname>
   ```

### About postgreSQL

1.  Relational Database
2.  Easy to learn
3.  Very Powerful
4.  Initial release: 8 July 1996
5.  Stored data by tables (rows & columns)

### Speciality of postgreSQL

1.  Object-Relational Database Management System
2.  Modern
3.  Open Source

## POSTGRES COMMANDS :

1.  **Create database:**
    ```sh
        CREATE DATABASE <Database name>
    ```
2.  **See available database with** "\l"

3.  **Switch database using**

    ```sh
        \c <Database name>
    ```

4.  **Delete database using**

    ```sh
        DROP DATABASE <Database name>
    ```

5.  **Create table using**

    ```sh
        CREATE TABLE <table_name> (
            <column name> + <data_type> + <constraints if any>
        )
    ```

6.  **See available table in current database with** "\d"

7.  **See available table in current database with details**

    ```sh
        \d <table name>
    ```

8.  **delete table using**

    ```sh
        DROP TABLE <table_name>
    ```

9.  **Order By keyword used to order a list**
    ```sh
        SELECT () FROM <Table_Name> ORDER BY <Column_Name> ASC/DESC
    ```
