const express = require("express");
const config = require("./config/config");
const mysql = require("mysql");

const app = express();

const {host, user,password, database} = config.database;
const db = mysql.createConnection({host, user,password, database});

const port = config.port;
db.connect((err)=>{
    if(err){
        console.log("Database error",err);
        return;
    }
    console.log('Connected to the database');
});

app.listen(port,()=>{
    console.log("Server started at Port: ",port);
})
