import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

  const token = req.headers['authorization'];
  
  if (!token) {
      return res.status(403).send('No token provided.');
  }

  // "Bearer " prefiksini silirik və tokeni yoxlayırıq
  const tokenWithoutBearer = token.split(' ')[1];

  jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
          return res.status(500).send('Failed to authenticate token.');
      }

      // Token doğru olduqda, istifadəçi ID və rolu decoded məlumatdan alırıq
      req.userId = decoded.id;
      req.userRole = decoded.role;

      next();
  });
};


export const createToken = (user) => {
  // user.id və user.role JWT tokenə daxil ediləcək
  const token = jwt.sign(
      { id: user._id, role: user.role }, // Payload: istifadəçi məlumatları
      process.env.SECRET_KEY, // Gizli açar (bu sizin öz xüsusi açarınız olmalıdır)
      { expiresIn: '1h' } // Tokenin müddəti (1 saatlıq token)
  );
  // console.log(req.headers)
};

// Admin icazəsi üçün əlavə middleware
export const checkAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
      return res.status(403).send('Admin rights required.');
  }
  next();
};
