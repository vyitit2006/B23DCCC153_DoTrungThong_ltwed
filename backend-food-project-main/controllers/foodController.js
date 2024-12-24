const Food = require('../models/Food');

exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addFood = async (req, res) => {
  const { title, description, rate, quantity, star, url, titlename, titleId } = req.body;

  try {
    const newFood = await Food.create({ title, description, rate, quantity, star, url, titlename, titleId });
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
