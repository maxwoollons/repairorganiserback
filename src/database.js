import mysql from "mysql2/promise";

export const db_conn = mysql.createPool({
    host: "220.239.3.153",          
    user: "repair",
    password: "repairpass",
    port: "3306",
    database: "repair"
    
});


