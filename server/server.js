require("dotenv").config();
const express = require("express");
const Database = require("./database/mongodb");


const app = express();
const { PORT, DATABASE_PATH } = process.env;

Database.connect(DATABASE_PATH);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`server started at: http://localhost:${PORT}`)
);
