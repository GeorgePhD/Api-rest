# Api rest with node

## start the server
1. go to : C:/Program Files/MongoDB/Server/7.0/bin = this is where mongoDB is installed.
2. mongod.exe = this runs the the demon, it has to be running always when you wanna use the DB.
3. in a new bash, go again to C:/Program Files/MongoDB/Server/7.0/bin
4. run mongosh.exe = this initiates the server and you can check the DBs and work with them.


## MongoDB commands
show dbs = show databases
use +DBName = switches to that DB / creates db
db.ps4.insertOne({}); = inside you write your data 
example : 
db.ps4.insertOne({title: "The Last of Us Part 2", genre: "adventures", year: 2020});
db.ps4.insertMany({title: "The Last of Us Part 2", genre: "adventures", year: 2020}, {title: "The Last of Us Part 2", genre: "adventures", year: 2020});
show collections = show collections in the DB


## Initialize the node project
5. npm init = inside the Api-rest folder, this starts the node project and creates a package.json

## Libraries to be installed
6. npm install express --save = this framework manages the http requests.
7. npm install mongoose --save = this framework manages the methods and functions that helps ease the work with mongoDB.
8. npm install multer --save = library to upload files.
9. npm install validator --save = it helps validate data.
10. npm install cors --save = it helps with the accesses between domains.
11. npm install nodemon --save-dev = it helps refreshing the server, it is like a watcher in the front end projects.
12. Remember to run the npm start to use nodemon.

## Connect to DB
