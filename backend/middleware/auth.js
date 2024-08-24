import jwt from "jsonwebtoken";

const authMiddleware=async (req,res,next)=>{
  const{token}=req.headers;
  if(!token){
    return res.json({succes:false,message:"Not Authorized Login again"});
  }
  try {
    const token_decode=jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId=token_decode.id;    
    next();
  } catch (error) {
    console.log(error);
    res.json({succes:false,message:"Error"})
  }
}
export default authMiddleware;


// const authMiddleware = async (req, res, next) => {
//     // Use the 'Authorization' header for tokens
//     const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

//     if (!token) {
//         return res.status(401).json({ success: false, message: "Not Authorized: Login again" });
//     }

//     try {
//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = { id: tokenDecode.id }; // Attach user info to req.user
//         next(); // Pass control to the next middleware or route handler
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({ success: false, message: "Invalid token" });
//     }
// };

