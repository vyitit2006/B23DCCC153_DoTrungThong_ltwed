const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// Đăng ký user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Kiểm tra xem user đã tồn tại
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'Người dùng đã tồn tại' });
    }

    // Tạo user mới
    const user = await User.create({ name, email, password });
    if (user) {
      return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id), // Tạo token
      });
    }
    return res.status(400).json({ message: 'Lỗi khi tạo người dùng' });
  } catch (error) {
    return res.status(500).json({ message: `Lỗi server: ${error.message}` });
  }
};

// Đăng nhập user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Tìm user theo email
    const user = await User.findOne({ where: { email } });
    if (user && (await user.matchPassword(password))) {
      return res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id), // Tạo token
      });
    }
    return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
  } catch (error) {
    return res.status(500).json({ message: `Lỗi server: ${error.message}` });
  }
};

// Lấy thông tin người dùng
const getUserProfile = async (req, res) => {
  try {
    // Tìm user theo ID từ token
    const user = await User.findByPk(req.user.id); // Sử dụng Sequelize với primary key
    if (user) {
      return res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    }
    return res.status(404).json({ message: 'Người dùng không tồn tại' });
  } catch (error) {
    return res.status(500).json({ message: `Lỗi server: ${error.message}` });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };
