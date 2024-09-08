import path from "path";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const { token } = req.params;
  jwt.verify(token, "nodejs-task", (err, decode) => {
    if (err) {
      res.send("error");
    } else {
      req.user = decode.user;
      next();
    }
  });
};

export const checkAdmin = (req, res, next) =>{
    if (req.user && req.user.role === 'admin') {
        next(); // Adminsə davam et
    } else {
        res.sendStatus(403); // Admin deyil, icazə yoxdur
    }
}