import { db_conn } from "../database.js";

export function allRepairs(){
    console.log("all orders")
    return db_conn.query("SELECT *,DATE_FORMAT(requiredby,'%d/%m/%y') as Date,DATE_FORMAT(requiredby,'%y-%m-%d') as CalDate FROM repair.repairs WHERE archived = 0 ORDER BY requiredby ASC ;")
}


export function archivedRepairs(){
    console.log("all orders")
    return db_conn.query("SELECT *,DATE_FORMAT(requiredby,'%d/%m/%y') as Date,DATE_FORMAT(requiredby,'%y-%m-%d') as CalDate FROM repair.repairs WHERE archived = 1 ORDER BY requiredby ASC ;")
}


export function addRepair(idrepairs,note,requiredby,tdc){
    console.log("add repair")
    return db_conn.query("INSERT INTO repair.repairs (`id`,`idrepairs`, `note`,`requiredby`, `tdc`) VALUES (NULL, ?, ?, ?, ?);",[idrepairs,note,requiredby,tdc])
}



