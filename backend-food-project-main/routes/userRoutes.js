const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Đăng ký user
router.post('/register', registerUser);

// Đăng nhập user
router.post('/login', loginUser);

// Lấy thông tin người dùng (yêu cầu token)
router.get('/profile', protect, getUserProfile);

module.exports = router;
