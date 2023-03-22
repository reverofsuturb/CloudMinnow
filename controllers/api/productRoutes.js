const { Product } = require('../../models');

const router = require('express').Router();


//GET all products
router.get('/', async (req, res) => {
  try{
    const productData = await User.findAll({include: Product});
    res.status(200).json(productData)
  } catch (err) {
    res.status(500).json(err)
  }
});

//GET one product



//POST products
router.post('/', async (req, res) => {
  try {

} catch (err) {

}
});

//UPDATE PRODUCTS
//DELETE PRODUCTS


module.exports = router;