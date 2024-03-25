Modified [prof'code](https://github.com/sfsu-csc-667-spring-2024-roberts/week-7/tree/section-1) to keep backend folder only

# Install PostgreSQL 
[Click this to view instruction](https://docs.google.com/document/d/1pbvpEM3iX-QS22NNep6ATKgohM8zu4Pu18dmw13JgrY/edit?usp=sharing)

# Build and start backend server

`cd unogame/backend`: Change directory to backend folder from repo root

`npm install`: install dependencies

`npm run build`: build the server 

`npm run build:dev`: develop and build the server 

`npm run start`: run the server in production mode after the build process is completed

backend server: `http://localhost:3333/`

# Database interaction

`npm run db:create [name]`: create a new migration file with the name you give it

`npm run db:migrate`: update database schema

`npm run db:rollback`: revert database schema