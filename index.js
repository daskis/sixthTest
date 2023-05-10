import express  from "express";
import mysql from "mysql"
import bcrypt, { hash } from "bcrypt"
const PORT = 2001;
const app = express();
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "node_basics",
    password: "Daskis009"
});
app.post("/test", (req, res) => {
    bcrypt.hash("admin", 10, (hash) => {
        connection.query(`INSERT INTO admin (login, password) values ("admin", "${hash}");`)
    })
})
app.listen(PORT, () => {
    console.log("working")
})
