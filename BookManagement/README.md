Overview

The Book Management API provides a RESTful interface for managing a collection of books, supporting CRUD operations with optional authentication and pagination.
Prerequisites

    Node.js: v14 or later
    PostgreSQL: Installed and running on your machine

Setup Instructions
1. Clone the Repository

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the root directory and add the following variables. Replace placeholder values with your PostgreSQL configuration:

SERVER_PORT=3000                   # Server port
DB_PORT=5432                        # Database port (5432 for PostgreSQL)
USERNAME=<your_postgres_username>    # PostgreSQL username
PASSWORD=<your_postgres_password> # PostgreSQL password
DATABASE=<your_database_name>              # Database name
JWT_SECRET=<your_jwt_secret>        # JWT secret for authentication
DB_DIALECT=postgres


4. Setup the Database

Ensure PostgreSQL is running and create a database:


5. Run Database Migrations

npm run migrate

To run the seed data, load it with:

npm run seeds

6. Start the Server

Start the server using Nodemon:

npm start


Available Scripts

    npm start: Runs the server with Nodemon using TypeScript.
    npm run build: Compiles TypeScript files into JavaScript in the dist folder.
    npm run migrate: Runs all pending database migrations.
    npm run undo-migiration: Rolls back the last migration.
    npm run seeds: Runs all seed files to populate the database.
    npm run format: Formats code using Prettier.
