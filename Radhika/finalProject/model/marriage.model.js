import pool from "../db/dbConfig.js";
class Marriage{
    static createMarriageProfile = (categoryId,userId,name,dob,address,placeOfbirth,contactNumber,educationalDetails,professionalDetails,familyDetails,hobbies,about,photoUrl,caste,religion)=>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "insert into marriage(categoryId,userId,name,dob,address,placeOfBirth,contactNumber,educationalDetails,professionalDetails,familyDetails,hobbies,about,photoUrl,caste,religion) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

                    con.query(sql,[categoryId,userId,name,dob,address,placeOfbirth,contactNumber,educationalDetails,professionalDetails,familyDetails,hobbies,about,photoUrl,caste,religion], (err, result)=>{
                        err? reject(err):resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    static updateMarriageProfile = (userId,name,dob,address,placeOfbirth,contactNumber,educationalDetails,professionalDetails,familyDetails,hobbies,about,photoUrl,caste,religion)=>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "update marriage set name = ?,dob = ?, address = ?, placeOfBirth = ?, contactNumber = ?, educationalDetails = ?, professionalDetails = ?, familyDetails = ?, hobbies = ?, about = ?, photoUrl = ?, caste = ?, religion = ?  where userId=?";

                    con.query(sql,[name,dob,address,placeOfbirth,contactNumber,educationalDetails,professionalDetails,familyDetails,hobbies,about,photoUrl,caste,religion,userId], (err, result)=>{
                        err? reject(err):resolve(result);
                        con.release();
                    });
                }
            });
        });
    }

    static deleteMarriageProfile = (userId)=>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "delete from marriage where userId=?";
                    con.query(sql,[userId], (err, result)=>{
                        err? reject(err):resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
    static viewMarriageProfile = (userId)=>{
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "select name,dob,address,placeOfBirth,contactNumber, educationalDetails,professionalDetails,familyDetails,hobbies,about,photourl,caste,religion from marriage where userId=?";
                    con.query(sql,[userId], (err, result)=>{
                        err? reject(err):resolve(result);
                        con.release();
                    });
                }
            });
        });
    }
}

export default Marriage;