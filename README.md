1.npm install --save-dev sequelize-cli

2.npx sequelize-cli init

3.create model npx sequelize-cli model:generate --name UserOtp --attributes Name:string,phone:string,otp:string

4.npm install mysql2

5.npx sequelize-cli db:migrate
6.create index searchindex on `buluckcart-db`.products(name)
"start": "nodemon src/index.js --exec babel-node --presets @babel/env",
start
"start": "nodemon --exec npx babel-node src/index.js",
step for start the backend

1. git clone git repository.
2. cd backend
   3.npm install
   4.mySql configearion in .env file
   DB_CONNECTION=mysql
   DB_HOST=localhost
   DB_PORT=3306
   DB_DATABASE=SuperMarket
   DB_USERNAME=root
   DB_PASSWORD=
   5.setup the radis server by .env file.
   REDIS_HOST=localhost
   REDIS_PASSWORD=
   REDIS_PORT=6379

3. then migrate all table by hitt this cmd
   npx sequelize-cli db:migrate
4. create the locqal server of redis
   5.npm start
