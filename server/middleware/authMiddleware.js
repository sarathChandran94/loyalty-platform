import jwt from "jsonwebtoken"

export function protect (req, res, next) {
    try {
        const authHeader = req.headers.authorization

        // console.log(`at protect authHeader: ${authHeader}`);
        

        if(!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: "Not Authorized. Token required"
            })
        }
        const token = authHeader.split(' ')[1]
        console.log(`token received: ${token}`);
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.id
        next()

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Not Authorized. Invalid or expired token'
        })
        
    }
}