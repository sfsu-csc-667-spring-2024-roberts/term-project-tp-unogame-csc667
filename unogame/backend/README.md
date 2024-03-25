# Getting Started
Install PostgreSQL 16.2

## Build and start backend server

`cd unogame/backend`:     Change directory to backend folder from repo root

`npm install`:     install dependencies

`npm run build`:     build the server 

`npm run dev`:     develop and build the server 

`npm run start`:     run the server in production mode after the build process is completed

`http://localhost:3333/`:    backend server

## Database interaction

`npm run db:create name`:   create a new migration file with the name you give it

`npm run db:migrate`:   update database schema

`npm run db:rollback`:   revert database schema
