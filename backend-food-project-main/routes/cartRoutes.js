const express = require('express');
const router = express.Router();

let cart = [];

// Lấy giỏ hàng
router.get('/', (req, res) => {
  res.status(200).json(cart);
});

// Thêm món ăn vào giỏ
router.post('/', (req, res) => {
  const { id, title, rate, quantity } = req.body;
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id, title, rate, quantity });
  }

  res.status(201).json(cart);
});

// Xóa món ăn khỏi giỏ
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  cart = cart.filter((item) => item.id !== parseInt(id));
  res.status(200).json(cart);
});

// Xóa toàn bộ giỏ hàng
router.delete('/', (req, res) => {
  cart = [];
  res.status(200).json({ message: 'Giỏ hàng đã được làm trống' });
});

module.exports = router;
