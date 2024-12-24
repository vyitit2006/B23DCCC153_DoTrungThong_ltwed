const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const foodRoutes = require('./routes/foodRoutes');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Static file cho hình ảnh
app.use('/images', express.static('public/images'));

// Routes
app.use('/api/foods', foodRoutes);
app.use('/api/users', userRoutes); // Thêm route user ở đây

// Middleware xử lý lỗi
app.use(errorHandler);

// Lắng nghe server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
