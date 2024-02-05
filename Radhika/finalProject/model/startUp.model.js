import pool from "../db/dbConfig.js";
class StartUp{
    static createStartUpProfile = (categoryId,userId,startUpName,logoImageUrl,foundingDate,founderName,missionVission,aboutStartUp,contact,email,websiteUrl,tagLine)=>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "insert into startUp(categoryId,userId,startUpName,logoImageUrl,foundingDate,founderName,missionVission,aboutStartUp,contact,email,websiteUrl,tagLine) values(?,?,?,?,?,?,?,?,?,?,?,?)";

                    con.query(sql,[categoryId,userId,startUpName,logoImageUrl,foundingDate,founderName,missionVission,aboutStartUp,contact,email,websiteUrl,tagLine], (err, result)=>{
                        err? reject(err):resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    static updateStartUpProfile = (userId,startUpName,logoImageUrl,foundingDate,founderName,missionVission,aboutStartUp,contact,email,websiteUrl,tagLine)=>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "update startup set startUpName = ?,logoImageUrl = ?, foundingDate = ?, founderName = ?, missionVission = ?, aboutStartUp = ?, contact = ?, email = ?, websiteUrl = ?, tagLine = ?  where userId=?";

                    con.query(sql,[startUpName,logoImageUrl,foundingDate,founderName,missionVission,aboutStartUp,contact,email,websiteUrl,tagLine,userId], (err, result)=>{
                        err? reject(err):resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    static deleteStartUpProfile = (userId)=>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "delete from startup where userId=?";
                    con.query(sql,[userId], (err, result)=>{
                        err? reject(err):resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
    static viewStartUpProfile = (userId)=>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "select startUpName,logoImageUrl,foundingDate,founderName,missionVission,aboutStartUp,contact,email,websiteUrl,tagLine from startup where userId=?";
                    con.query(sql,[userId], (err, result)=>{
                        err? reject(err):resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}

export default StartUp;