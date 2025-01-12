const express = require("express");
const userInfo = require("../model/model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const note = require("../model/notesModel");
const secret_key =
  process.env.SECRET_KEY ||
  "uwehiushe2398hsdgh32985982sdbkbsjdfkjsfksdfk8236498@#&^%*&^*%$#%$@";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const existUser = await userInfo.findOne({ email });

  if (existUser) {
    res.send("user alredy exist");
  } else {
    try {
      const hashedPassword = await bcrypt.hash(password, 10); //!password is passed here to the hashedPassword

      const result = await userInfo.insertMany([{ username, email, hashpassword: hashedPassword },]);
      res.status(200).json({ message: "user registerd successfully", result });
    } catch (error) {
      res.send(error);
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userExist = await userInfo.findOne({ email });
  try {
    if (userExist) {
      const comparePassword = await bcrypt.compare(password, userExist.hashpassword);
      if (comparePassword) {
        const token = jwt.sign({ user: userExist }, secret_key, { expiresIn: "3hr",});
        res.status(200).json({ message: "user login successfully", token ,userName:userExist.username});
      } else {
        res.json("password not matched");
      }
    } else {
      res.json("email is not matched");
    }
  } catch (error) {
    res.json(error);
  }
});

//!Middleware to check token this code for backend when you use postman
// const verifytoken=(req,res,next)=>{
//     const token = req.headers["access-token"]
//     if(!token) {
//         res.status(401).send({auth:false,message:"No token provided"})
//     }
//     else{
//         jwt.verify(token,secret_key,(err,decoded)=>{
//             if (err) {
//                 res.status(500).send({auth:false,message:"Failed to authenticate token"})
//             } else{
//                 console.log(decoded.user);
//                 req.user=decoded.user  //!vvi main line ,,that perticular user stored in req.user and that req.user i created explicitely in the req object
//             }

//             next()
//         })
//     }
// }

//!Middleware to check token this code for frontend
const verifytoken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; //!1st line
  const token = authHeader && authHeader.split(" ")[1]; //! 2nd line these two lines for fetching data from frontend

  if (!token) {
    res.status(401).send({ auth: false, message: "No token provided" });
  } else {
    jwt.verify(token, secret_key, (err, decoded) => {
      if (err) {
        res.status(500).send({ auth: false, message: "Failed to authenticate token" });
      } else {
        // console.log(decoded.user);
        req.user = decoded.user; //!vvi main line ,,that perticular user stored in req.user and that req.user i created explicitely in the req object
      }

      next();
    });
  }
};

//!Private Routes
//!create notes
//!it is for backend purpose means whenever you use postman these code will be excute if you use frontend then this code will not work
// router.post("/create-notes",verifytoken,async(req,res)=>{
//     const currentUser=req.user
//     const {title,content,subject}=req.body
//    try {
//      const result= await note.insertMany([{title,content,subject,notesId:currentUser._id}])
//      res.json({message:"notes added successfully"})
//    } catch (error) {
//      res.json({message:"failed to add notes"})
//    }

//  })

//!it is for frontend purpose if this code is use for postman it will not work
//!create notes
router.post("/create-notes", verifytoken, async (req, res) => {
 const currentUser=req.user
  // console.log(currentUser);
  
      const {title,content,subject}=req.body
     try {
       const result= await note.insertMany([{title,content,subject,notesId:currentUser._id}])
       res.json({message:"notes added successfully",result})
     } catch (error) {
       res.json({message:"failed to add notes"})
     }

  // const authHeader = req.headers["authorization"];
  // console.log(authHeader);
  
  // const token = authHeader && authHeader.split(" ")[1];
  // if (!token) {
  //   res.status(401).send({ auth: false, message: "No token provided" });
  // } else {
  //   const currentUser = req.user;
  //   console.log(currentUser);
    
  //   const { title, content, subject } = req.body;
  //   if(currentUser){
  //       try {
  //           const result = await note.insertMany([{ title, content, subject, notesId: currentUser._id },]);
  //           res.json({ message: "notes added successfully" });
  //         } catch (error) {
  //           res.json({ message: "failed to add notes" });
  //         }
  //   }
  //   else{
  //       res.json({message:"there is no current user"})
  //   }
  // }
});

//  //!get notes
router.get("/get-notes", verifytoken, async (req, res) => {
  const currentUser = req.user;
  try {
    if (currentUser) {
      const getallNotes = await note.find({ notesId: currentUser._id },{ notesId: 0 });
      res.json({ allnotes: getallNotes });
    }
  } catch (error) {
    res.json(error);
  }
});

//!update notes
router.put("/update-notes/:id", verifytoken, async (req, res) => {
  const currentUser = req.user;
  const { title, content, subject } = req.body;
  const { id } = req.params;
  try {
    if (currentUser) {
      const updateNotes = await note.updateOne({ _id:id },{ $set: { title, content, subject } });
      res.json({message: "updated note successfully",whichNotes: updateNotes,});
    }
  } catch (error) {
    res.json({ message: "there is some error in update note" });
  }
});

//!delete notes
router.delete("/delete-notes/:id", verifytoken, async (req, res) => {
  const currentUser = req.user;
  // console.log(currentUser);
  
  const { id } = req.params;
  try {
    if (currentUser) {
      const deleteNotes = await note.deleteOne({ _id: id });
      res.json({
        message: "delete note successfully",
        whichNotes: deleteNotes,
      });
    }
  } catch (error) {
    res.json({ message: "there is some error in delete note" });
  }
});



router.put("/resetpassword", async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;
  const userExist = await userInfo.findOne({ email });

  try {
    if (userExist) {
      if (newPassword == confirmPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const resetPassword = await userInfo.updateOne(
          { email },
          { $set: { hashpassword: hashedPassword } }
        );
        res.json({
          message: "password reset successfully",
          thisUserPasswordChange: resetPassword,
        });
      } else {
        res.json("new password doesnot matched with confirm password");
      }
    } else {
      res.json("email is not matched");
    }
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
