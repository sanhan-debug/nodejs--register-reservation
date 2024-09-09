import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).send('please login.');
  }

  const only_token = token.split(' ')[1];

  jwt.verify(only_token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).send('Failed to authenticate token.');
    }

    console.log("Decoded JWT: ", decoded); // JWT-in düzgün şəkildə deşifrə olunduğunu yoxlayın
    req.user = { id: decoded.id, role: decoded.role };
    next();
  });
};


export const createToken = (user) => {
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.SECRET_KEY,
    { expiresIn: '1h' }
  );

  return token;
};

export const checkAdmin = (req, res, next) => {
  if (req.user && req.userRole === 'admin') {
    next();
  } else {
    res.sendStatus(403); 
  }
}