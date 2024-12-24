const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/db'); // Kết nối cơ sở dữ liệu

const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Bắt buộc nhập
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Email không được trùng lặp
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Thêm trường createdAt và updatedAt
  }
);

// Middleware: Mã hóa mật khẩu trước khi lưu
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

// Phương thức: Kiểm tra mật khẩu
User.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = User;
