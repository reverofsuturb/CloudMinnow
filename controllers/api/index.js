const router = require('express').Router();
const animalRoutes = require('./animalRoutes')
const ownerRoutes = require('./ownerRoutes')
const productRoutes = require('./productRoutes')


router.use('/animals', animalRoutes);
router.use('/owners', ownerRoutes);
router.use('/products', productRoutes)

module.exports = router;