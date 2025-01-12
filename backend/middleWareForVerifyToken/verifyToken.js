// const secret_key=process.env.SECRET_KEY || "uwehiushe2398hsdgh32985982sdbkbsjdfkjsfksdfk8236498@#&^%*&^*%$#%$@"
// const jwt=require("jsonwebtoken")

// //!Middleware to check token this code for backend whwn you use postman
// // const verifytoken=(req,res,next)=>{
// //     const token = req.headers["access-token"]
// //     if(!token) {
// //         res.status(401).send({auth:false,message:"No token provided"})
// //     }
// //     else{
// //         jwt.verify(token,secret_key,(err,decoded)=>{
// //             if (err) {
// //                 res.status(500).send({auth:false,message:"Failed to authenticate token"})
// //             } else{
// //                 console.log(decoded.user);
// //                 req.user=decoded.user  //!vvi main line ,,that perticular user stored in req.user and that req.user i created explicitely in the req object
// //             }

// //             next()
// //         })
// //     }
// // }

// //!Middleware to check token this code for frontend
// const verifytoken = (req, res, next) => {
//     const authHeader = req.headers["authorization"]; //!1st line
//     const token = authHeader && authHeader.split(" ")[1]; //! 2nd line these two lines for fetching data from frontend
  
//     if (!token) {
//       res.status(401).send({ auth: false, message: "No token provided" });
//     } else {
//       jwt.verify(token, secret_key, (err, decoded) => {
//         if (err) {
//           res.status(500).send({ auth: false, message: "Failed to authenticate token" });
//         } else {
//           // console.log(decoded.user);
//           req.user = decoded.user; //!vvi main line ,,that perticular user stored in req.user and that req.user i created explicitely in the req object
//         }
  
//         next();
//       });
//     }
//   };
  