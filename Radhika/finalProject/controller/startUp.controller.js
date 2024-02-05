import StartUp from "../model/startUp.model.js";
import User from "../utility/user.utility.js";
export const createStartUpProfile = (request, response, next) => {
  let categoryId = request.body.categoryId;
  let userId = request.body.userId;
  let startUpName = request.body.startUpName;
  let logoImageUrl = request.body.logoImageUrl;
  let foundingDate = request.body.foundingDate;
  let founderName = request.body.founderName;
  let missionVission = request.body.missionVission;
  let aboutStartUp = request.body.aboutStartUp;
  let contact = request.body.contact;
  let email = request.body.email;
  let websiteUrl = request.body.websiteUrl;
  let tagLine = request.body.tagLine;
  
  User.isUserExists("startup", userId)
    .then((result) => {
        console.log(result);
      if (result.length==0) {
        StartUp.createStartUpProfile(categoryId,userId,startUpName,logoImageUrl,foundingDate,founderName,missionVission,aboutStartUp,contact,email,websiteUrl,tagLine
        )
          .then((result) => {
            if (result.affecterdRows != 0)
              return response
                .status(200)
                .json({ message: "Start-Up profile created successfully" });
            return response
              .status(501)
              .json({ message: "Start-Up profile not created." });
          })
          .catch((err) => {
            console.log(err);
            return response
              .status(400)
              .json({ message: "Internal server error" });
          });
      }
      else
        return response.status(501).json({message:"Start-Up profile already Exists"});
    })
    .catch((err) => {
        console.log(err);
        return response.status(400).json({message:"Internal server error"});
    });
};


export const updateStartUpProfile = (request, response, next)=>{
    let userId = request.body.userId;
    let startUpName = request.body.startUpName;
    let logoImageUrl = request.body.logoImageUrl;
    let foundingDate = request.body.foundingDate;
    let founderName = request.body.founderName;
    let missionVission = request.body.missionVission;
    let aboutStartUp = request.body.aboutStartUp;
    let contact = request.body.contact;
    let email = request.body.email;
    let websiteUrl = request.body.websiteUrl;
    let tagLine = request.body.tagLine;
  StartUp.updateStartUpProfile(userId,startUpName,logoImageUrl,foundingDate,founderName,missionVission,aboutStartUp,contact,email,websiteUrl,tagLine
  )
    .then((result) => {
      if (result.affectedRows != 0)
        return response
          .status(200)
          .json({ message: "Start-Up profile updated successfully" });
      return response
        .status(501)
        .json({ message: "Start-Up profile not update." });
    })
    .catch((err) => {
      console.log(err);
      return response
        .status(400)
        .json({ message: "Internal server error" });
    });

}


export const deleteStartUpProfile = (request, response, next)=>{
  let userId = request.body.userId;
  
  StartUp.deleteStartUpProfile(userId)
    .then((result) => {
      console.log(result);
      if (result.affectedRows != 0)
        return response
          .status(200)
          .json({ message: "Start-Up profile deleted successfully" });
      return response
        .status(501)
        .json({ message: "Start-Up profile doesn't exists." });
    })
    .catch((err) => {
      console.log(err);
      return response
        .status(400)
        .json({ message: "Internal server error" });
    });

}
export const viewStartUpProfile = (request, response, next)=>{
  let userId = request.body.userId;
  
  StartUp.viewStartUpProfile(userId)
    .then((result) => {
      console.log(result);
      if (result.affectedRows != 0)
        return response
          .status(200)
          .json({ profile: result});
      return response
        .status(501)
        .json({ message: "Start-Up profile doesn't exists." });
    })
    .catch((err) => {
      console.log(err);
      return response
        .status(400)
        .json({ message: "Internal server error" });
    });

}