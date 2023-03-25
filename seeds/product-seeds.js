const { Product } = require("../models");

const productData = [
  {
    product_name: "Booster Dog Seat",
    product_description: "For big dog",
    price: 14.99,
    filename: "01-Booster-Dog-Seat.jpg",
    stock: 14,
    species_id: 1,
  },
  {
    product_name: "Tennis Ball Set Squeaker Dog Toy",
    product_description: "Blue and soft",
    price: 90.0,
    filename: "02-Tennis-Ball-Set.jpg",
    stock: 25,
    species_id: 1,
  },
  {
    product_name: "Real Wood Cat Tree With Top Perch",
    product_description: "Made of real wood",
    price: 22.99,
    filename: "03-Real-Wood-Cat-Tree.jpg",
    stock: 12,
    species_id: 2,
  },
  {
    product_name: "23-in Scratch & Play Cuddler Cat Scratcher",
    product_description:
      "Let your cat scratch the scratcher not your furniture",
    price: 12.99,
    filename: "04-Cuddler-Cat-Scratcher.jpg",
    stock: 50,
    species_id: 2,
  },
  {
    product_name: "Grey Cat Blanket",
    product_description: "Soft and washable",
    price: 29.99,
    filename: "05-Grey-Cat-Blanket.jpg",
    stock: 22,
    species_id: 2,
  },
  {
    product_name: "Dog Treat - Peanut Butter",
    product_description: "",
    price: 9.99,
    filename: "06-Dog-Treat-Peanut-Butter.jpg",
    stock: 122,
    species_id: 1,
  },
  {
    product_name: "Natural Teaser Cat Toys",
    product_description:
      "Interact with your cat while satisfying her natural instinct to hunt",
    price: 9.99,
    filename: "07-Natural-Teaser-Cat-Toys.jpg",
    stock: 5,
    species_id: 2,
  },
  {
    product_name: "Sandwich Dog Toy",
    product_description:
      "Plush Sandwich Dog Toy is a plush toy that provides companionship and comfort",
    price: 9.99,
    filename: "08-Sandwich-Dog-Toy.jpg",
    stock: 20,
    species_id: 1,
  },
  {
    product_name: "Robotic Bug Cat Toy",
    product_description: "Allows for interactive pet playtime",
    price: 6.99,
    filename: "09-Robotic-Bug-Cat-Toy.jpg",
    stock: 30,
    species_id: 2,
  },
  {
    product_name: "3-in1 Dog Stroller",
    product_description: "Multi-use carrier ideal for disabled or senior pets",
    price: 99.99,
    filename: "10-3-in1-Pet-Stroller.jpg",
    stock: 8,
    species_id: 1,
  },
  {
    product_name: "Peek-a-Prize Toy Box Cat Toy",
    product_description: "Stimulates a cat's desire to hunt and play",
    price: 19.99,
    filename: "11-Box-Cat-Toy.jpg",
    stock: 9,
    species_id: 2,
  },
  {
    product_name: "Baseball Dog Cap",
    product_description:
      "Blue Baseball Cap makes a great fashion choice for your furry friend",
    price: 9.99,
    filename: "12-Baseball-Dog-Cap.jpg",
    stock: 12,
    species_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
