const { Product } = require("../models");

const productData = [
  {
    product_name: "Booster Dog Seat",
    price: 14.99,
    filename: "01-Booster-Dog-Seat.jpg",
    stock: 14,
    species_id: 1,
  },
  {
    product_name: "Tennis Ball Set Squeaker Dog Toy",
    price: 90.0,
    filename: "02-Tennis-Ball-Set.jpg",
    stock: 25,
    species_id: 1,
  },
  {
    product_name: "Real Wood Cat Tree With Top Perch",
    price: 22.99,
    filename: "03-Real-Wood-Cat-Tree.jpg",
    stock: 12,
    species_id: 2,
  },
  {
    product_name: "23-in Scratch & Play Cuddler Cat Scratcher",
    price: 12.99,
    filename: "04-Cuddler-Cat-Scratcher.jpg",
    stock: 50,
    species_id: 2,
  },
  {
    product_name: "Grey Cat Blanket",
    price: 29.99,
    filename: "05-Grey-Cat-Blanket.jpg",
    stock: 22,
    species_id: 2,
  },
  {
    product_name: "Dog Treat - Peanut Butter",
    price: 229.99,
    filename: "06-Dog-Treat-Peanut-Butter.jpg",
    stock: 122,
    species_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
