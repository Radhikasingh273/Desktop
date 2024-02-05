import pool from "../db/dbConfig.js";
class User{
    static isUserExists = (tableName,userId)=>{
        return new Promise( (resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err); 
                else{
                    let sql = "select * from "+tableName+" where userId=?";
                    con.query(sql,[userId],(err,result)=>{
                        err? reject(err):resolve(result);
                    });
                }
            });
        });
    }
}

export default User;