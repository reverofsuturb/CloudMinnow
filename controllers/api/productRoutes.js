const { Animal, Product, User, Species } = require('../../models');

const router = require('express').Router();


//GET all products
router.get('/', async (req, res) => {
  try{
    const productData = await Product.findAll({
      include: [
        {
          model: Species,
          required: false,
          include: { model: Animal }
        },
      ],
    });
    res.status(200).json(productData)
  } catch (err) {
    res.status(500).json(err)
  }
});

//GET one product
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, 
      {
        include: [
          {
            model: Species,
            required: false,
            include: { model: Animal }
          },
        ],
      },
    );
    if (!productData) {
      res.status(404).json({ message: "No product with this id" });
      return;
    }
    res.status(200).json(productData);

} catch (err) {
  res.status(500).json(err)
}
});



//POST products
router.post('/', async (req, res) => {
  try {

} catch (err) {

}
});

//UPDATE PRODUCTS
//DELETE PRODUCTS


module.exports = router;