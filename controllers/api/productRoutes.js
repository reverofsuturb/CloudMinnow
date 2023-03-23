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
    const newProduct = await Product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      filename: req.body.filename,
      species_id: req.body.species_id
    });
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE PRODUCTS
router.put('/:id', async (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((productData) => {
      // find all associated tags from ProductTag
      return Product.findAll({ where: { product_name: req.params.id } });
    })
      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });






//DELETE PRODUCTS
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!productData) {
      res.status(404).json({message: 'No product with this id'});
      return;
    }
    res.status(200).json(productData);
  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;