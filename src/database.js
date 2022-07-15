import mysql from "mysql2/promise";

export const db_conn = mysql.createPool({
    host: "192.168.5.106",          
    user: "repair",
    password: "repairpass",
    port: "3306",
    database: "repair"
    
});


