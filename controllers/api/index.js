
const router = require('express').Router();
const animalRoutes = require('./animalRoutes');
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');

// main routes and api db routes
router.use('/animal', animalRoutes);
router.use('/products', productRoutes);
router.use('/user', userRoutes);

module.exports = router;