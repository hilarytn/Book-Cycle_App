import  jwt  from "jsonwebtoken";

export const authenticate = async(req, res, next) => {
    try {
        const token = req.header('x-auth-token');
        if(!token) {
            return res.status(401).json({message: "Access denied. No token provided"});
        }
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded.user;
        next();
        
    } catch (error) {
        if(error.name === 'TokenExpiredError') {
            return res.status(401).json({error: error.message});   
        }
        res.status(401).json({message: "token is not valid."});   
    }
}