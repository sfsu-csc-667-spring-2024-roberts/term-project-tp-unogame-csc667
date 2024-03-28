# Getting Started

Install PostgreSQL 16.2

## Build and start backend server

`cd unogame/backend`: Change directory to backend folder from repo root

`npm install`: install dependencies

`npm run build`: build the server

`npm run dev`: develop and build the server

`npm run start`: start the server

`npm run format`: format code, **run this before a commit**

Port: 3333 or defined locally

## Database interaction

`npm run db:create name`: create a new migration file with the name you give it

`npm run db:migrate`: update database schema

`npm run db:rollback`: revert database schema (alternative option below)

To change tables in database (will delete all values stored):

- modify the table migration file directly
- open pgAdmin: right click the 667uno database, and select Query Tool
- run the following command to delete all old tables, then `npm run db:migrate` to add updated tables

```
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres, public;
COMMENT ON SCHEMA public IS 'standard public schema';
```
