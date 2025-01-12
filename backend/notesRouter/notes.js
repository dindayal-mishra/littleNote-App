// const express=require("express")
// const verifytoken = require("../middleWareForVerifyToken/verifyToken")
// const note = require("../model/notesModel")
// const router = require("../router/routerapi")
// const router=express.Router()


// //!Private Routes
// //!create notes
// //!it is for backend purpose means whenever you use postman these code will be excute if you use frontend then this code will not work
// // router.post("/create-notes",verifytoken,async(req,res)=>{
// //     const currentUser=req.user
// //     const {title,content,subject}=req.body
// //    try {
// //      const result= await note.insertMany([{title,content,subject,notesId:currentUser._id}])
// //      res.json({message:"notes added successfully"})
// //    } catch (error) {
// //      res.json({message:"failed to add notes"})
// //    }

// //  })

// //!it is for frontend purpose if this code is use for postman it will not work
// router.post("/create-notes", verifytoken, async (req, res) => {
//     const currentUser=req.user
//      console.log(currentUser);
     
//          const {title,content,subject}=req.body
//         try {
//           const result= await note.insertMany([{title,content,subject,notesId:currentUser._id}])
//           res.json({message:"notes added successfully",result})
//         } catch (error) {
//           res.json({message:"failed to add notes"})
//         }
   
//          // const authHeader = req.headers["authorization"];
//      // console.log(authHeader);
     
//      // const token = authHeader && authHeader.split(" ")[1];
//      // if (!token) {
//      //   res.status(401).send({ auth: false, message: "No token provided" });
//      // } else {
//      //   const currentUser = req.user;
//      //   console.log(currentUser);
       
//      //   const { title, content, subject } = req.body;
//      //   if(currentUser){
//      //       try {
//      //           const result = await note.insertMany([{ title, content, subject, notesId: currentUser._id },]);
//      //           res.json({ message: "notes added successfully" });
//      //         } catch (error) {
//      //           res.json({ message: "failed to add notes" });
//      //         }
//      //   }
//      //   else{
//      //       res.json({message:"there is no current user"})
//      //   }
//      // }
//    });

//    //  //!get notes
// router.get("/get-notes", verifytoken, async (req, res) => {
//     const currentUser = req.user;
//     try {
//       if (currentUser) {
//         const getallNotes = await note.find(
//           { notesId: currentUser._id },
//           { notesId: 0 }
//         );
//         res.json({ allnotes: getallNotes });
//       }
//     } catch (error) {
//       res.json(error);
//     }
//   });
  
//   //!update notes
//   router.put("/update-notes/:id", verifytoken, async (req, res) => {
//     const currentUser = req.user;
//     const { title, content, subject } = req.body;
//     const { id } = req.params;
//     try {
//       if (currentUser) {
//         const updateNotes = await note.updateOne(
//           { notesId: id },
//           { $set: { title, content, subject } }
//         );
//         res.json({
//           message: "update note successfully",
//           whichNotes: updateNotes,
//         });
//       }
//     } catch (error) {
//       res.json({ message: "there is some error in update note" });
//     }
//   });
  
//   //!delete notes
//   router.delete("/delete-notes/:id", verifytoken, async (req, res) => {
//     const currentUser = req.user;
//     console.log(currentUser);
    
//     const { id } = req.params;
//     try {
//       if (currentUser) {
//         const deleteNotes = await note.deleteOne({ _id: id });
//         res.json({
//           message: "delete note successfully",
//           whichNotes: deleteNotes,
//         });
//       }
//     } catch (error) {
//       res.json({ message: "there is some error in delete note" });
//     }
//   });