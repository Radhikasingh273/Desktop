import Marriage from "../model/marriage.model.js";
import User from "../utility/user.utility.js";
export const createMarriageProfile = (request, response, next) => {
  let categoryId = request.body.categoryId;
  let userId = request.body.userId;
  let namee = request.body.namee;
  let dob = request.body.dob;
  let address = request.body.address;
  let placeOfbirth = request.body.placeOfBirth;
  let contactNumber = request.body.contactNumber;
  let educationalDetails = request.body.educationalDetails;
  let professionalDetails = request.body.professionalDetails;
  let familyDetails = request.body.familyDetails;
  let hobbies = request.body.hobbies;
  let about = request.body.about;
  let photoUrl = request.body.photoUrl;
  let caste = request.body.caste;
  let religion = request.body.religion;
  console.log(photoUrl);

  User.isUserExists("marriage", userId)
    .then((result) => {
        console.log(result);
      if (result.length==0) {
        Marriage.createMarriageProfile(categoryId,userId,namee,dob,address,placeOfbirth,contactNumber,educationalDetails,professionalDetails,familyDetails,hobbies,about,photoUrl,caste,religion
        )
          .then((result) => {
            if (result.affecterdRows != 0)
              return response
                .status(200)
                .json({ message: "Marriage profile created successfully" });
            return response
              .status(501)
              .json({ message: "Marriage profile not created." });
          })
          .catch((err) => {
            console.log(err);
            return response
              .status(400)
              .json({ message: "Internal server error" });
          });
      }
      else
        return response.status(501).json({message:"Marriage profile already Exists"});
    })
    .catch((err) => {
        console.log(err);
        return response.status(400).json({message:"Internal server error"});
    });
};


export const updateMarriageProfile = (request, response, next)=>{
  let userId = request.body.userId;
  let namee = request.body.namee;
  let dob = request.body.dob;
  let address = request.body.address;
  let placeOfbirth = request.body.placeOfBirth;
  let contactNumber = request.body.contactNumber;
  let educationalDetails = request.body.educationalDetails;
  let professionalDetails = request.body.professionalDetails;
  let familyDetails = request.body.familyDetails;
  let hobbies = request.body.hobbies;
  let about = request.body.about;
  let photoUrl = request.body.photoUrl;
  let caste = request.body.caste;
  let religion = request.body.religion;
  Marriage.updateMarriageProfile(userId,namee,dob,address,placeOfbirth,contactNumber,educationalDetails,professionalDetails,familyDetails,hobbies,about,photoUrl,caste,religion
  )
    .then((result) => {
      if (result.affectedRows != 0)
        return response
          .status(200)
          .json({ message: "Marriage profile updated successfully" });
      return response
        .status(501)
        .json({ message: "Marriage profile not update." });
    })
    .catch((err) => {
      console.log(err);
      return response
        .status(400)
        .json({ message: "Internal server error" });
    });

}


export const deleteMarriageProfile = (request, response, next)=>{
  let userId = request.body.userId;
  
  Marriage.deleteMarriageProfile(userId)
    .then((result) => {
      console.log(result);
      if (result.affectedRows != 0)
        return response
          .status(200)
          .json({ message: "Marriage profile deleted successfully" });
      return response
        .status(501)
        .json({ message: "Marriage profile doesn't exists." });
    })
    .catch((err) => {
      console.log(err);
      return response
        .status(400)
        .json({ message: "Internal server error" });
    });

}
export const viewMarriageProfile = (request, response, next)=>{
  let userId = request.body.userId;
  
  Marriage.viewMarriageProfile(userId)
    .then((result) => {
      console.log(result);
      if (result.affectedRows != 0)
        return response
          .status(200)
          .json({ profile: result});
      return response
        .status(501)
        .json({ message: "Marriage profile doesn't exists." });
    })
    .catch((err) => {
      console.log(err);
      return response
        .status(400)
        .json({ message: "Internal server error" });
    });

}