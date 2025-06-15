// const jwt=require("jsonwebtoken");

// exports.authenticate=(req,res,next)=>{
//   const autHeader=req.headers.authorization;
//   if(!autHeader){
//     return res.status(403).json({
//       message:'No token provided'
//     })
//   }
//   const token=autHeader.split('')[1];
  
//   try{
//     const decoded=jwt.verify(token,process.env.JWT_SECRET);
//     req.user=decoded;
//     next();

//   }
//   catch(error:any){
//     res.status(401).json({
//       success:false,
//       message:"Unauthorized",
//       error: error.message
//     })
//   }
// }