const router = require("express").Router();
const { Animal, Product, User, Species } = require("./../models");
const withAuth = require("./../utils/auth");

router.get("/", async (req, res) => {
  res.render("landing");
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      include: [
        {
          model: Animal,
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
    res.render("profile", { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login-register");
});

router.get("/products", async (req, res) => {
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


module.exports = router;
