const router = require('express').Router();
const { Animal, Product, User, Species } = require("./../models");
const withAuth = require("./../utils/auth");

// homepage
router.get('/', async (req, res) => {
res.render('landing')
});

// profile page pulling animal so that pet data can populate
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      include: [
        {
          model: Animal,
          attributes: [
            'id',
            'name',
            'age',
            'description',
            'user_id',
            'species_id',
          ],
          required: false,
          include: { model: Species },
        },
      ],
    });
    if (!userData) {
      res.status(404).json({ message: "No user with that id" });
      return;
    }
    const user = userData.get({ plain: true });
    console.log(userData)
    res.render('profile', { user, userId: req.session.userId })
  } catch (err) {
    res.status(500).json(err);
  }

});

// user log in page
router.get('/login', async (req, res) => {
res.render('login-register')
});

// product page
router.get('/products', async (req, res) => {
try {
    const productData = await Product.findAll({
      include: [
        {
          model: Species,
          required: false,
          include: { model: Animal },
        },
      ],
});
    const products = productData.map((product) =>
    product.get({ plain: true })
    );
    res.render('products', { products });
  } catch (err) {
    res.status(500).json(err);
  }
});

// product page order options by price, name, stock ascending and descending, dog or cat
router.get('/products/sortbyPriceASC', async (req, res) => {
  try {
      const productData = await Product.findAll({
        order: [[ 'price', 'ASC' ]], 
        include: [
          {
            model: Species,
            required: false,
            include: { model: Animal },
          },
        ],
  });
      const products = productData.map((product) =>
      product.get({ plain: true })
      );
      res.render('products', { products });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.get('/products/sortbyPriceDESC', async (req, res) => {
  try {
      const productData = await Product.findAll({
        order: [[ 'price', 'DESC' ]], 
        include: [
          {
            model: Species,
            required: false,
            include: { model: Animal },
          },
        ],
  });
      const products = productData.map((product) =>
      product.get({ plain: true })
      );
      res.render('products', { products });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/products/sortbyNameASC', async (req, res) => {
    try {
        const productData = await Product.findAll({
          order: [[ 'product_name', 'ASC' ]], 
          include: [
            {
              model: Species,
              required: false,
              include: { model: Animal },
            },
          ],
    });
        const products = productData.map((product) =>
        product.get({ plain: true })
        );
        res.render('products', { products });
      } catch (err) {
        res.status(500).json(err);
      }
    });

    router.get('/products/sortbyNameDESC', async (req, res) => {
      try {
          const productData = await Product.findAll({
            order: [[ 'product_name', 'DESC' ]], 
            include: [
              {
                model: Species,
                required: false,
                include: { model: Animal },
              },
            ],
      });
          const products = productData.map((product) =>
          product.get({ plain: true })
          );
          res.render('products', { products });
        } catch (err) {
          res.status(500).json(err);
        }
      });

      router.get('/products/sortbyStockASC', async (req, res) => {
        try {
            const productData = await Product.findAll({
              order: [[ 'stock', 'ASC' ]], 
              include: [
                {
                  model: Species,
                  required: false,
                  include: { model: Animal },
                },
              ],
        });
            const products = productData.map((product) =>
            product.get({ plain: true })
            );
            res.render('products', { products });
          } catch (err) {
            res.status(500).json(err);
          }
        });

        router.get('/products/sortbyStockDESC', async (req, res) => {
          try {
              const productData = await Product.findAll({
                order: [[ 'stock', 'DESC' ]], 
                include: [
                  {
                    model: Species,
                    required: false,
                    include: { model: Animal },
                  },
                ],
          });
              const products = productData.map((product) =>
              product.get({ plain: true })
              );
              res.render('products', { products });
            } catch (err) {
              res.status(500).json(err);
            }
          });

          router.get('/products/sortbyDog', async (req, res) => {
            try {
                const productData = await Product.findAll({
                  where: {
                    species_id: 1,
                  }, 
                  include: [
                    {
                      model: Species,
                      required: false,
                      include: { model: Animal },
                    },
                  ],
            });
                const products = productData.map((product) =>
                product.get({ plain: true })
                );
                res.render('products', { products });
              } catch (err) {
                res.status(500).json(err);
              }
            });

            
          router.get('/products/sortbyCat', async (req, res) => {
            try {
                const productData = await Product.findAll({
                  where: {
                    species_id: 2,
                  }, 
                  include: [
                    {
                      model: Species,
                      required: false,
                      include: { model: Animal },
                    },
                  ],
            });
                const products = productData.map((product) =>
                product.get({ plain: true })
                );
                res.render('products', { products });
              } catch (err) {
                res.status(500).json(err);
              }
            });

module.exports = router;

