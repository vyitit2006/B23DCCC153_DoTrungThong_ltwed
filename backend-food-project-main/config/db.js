const { Sequelize } = require('sequelize');

// Kết nối cơ sở dữ liệu MySQL
const sequelize = new Sequelize('foodDB', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Sử dụng MySQL
});

sequelize
  .authenticate()
  .then(() => console.log('Kết nối MySQL thành công'))
  .catch((error) => console.error('Lỗi kết nối:', error));

module.exports = sequelize;
