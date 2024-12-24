
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded; // Hoặc lấy thông tin người dùng từ database
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token không hợp lệ!' });
    }
  } else {
    res.status(401).json({ message: 'Không có token, không được phép!' });
  }
};

module.exports = { protect };
