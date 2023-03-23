const router = require("express").Router();
const { Animal, Product, User, Species } = require("../../models");

//USER GET ROUTES
//get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: Animal,
          required: false,
          include: { model: Species },
        },
      ],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get user by id
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
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
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST USER
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      has_pets: req.body.has_pets,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = req.body.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      res.status(400).json({ message: "Account does not exist" });
      return;
    }

    const validatePassword = user.checkPassword(req.body.password);

    if (!validatePassword) {
      res
        .status(400)
        .json({ message: "Please check your input and try again" });
      return;
    }

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = req.body.username;
      req.session.loggedIn = true;

      res.json({ user, message: "Welcome to Fluffy!" });
    });
  } catch (err) {
    res.status(400).json({ message: "Please check your input and try again" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//UPDATE USER

//DELETE USER

module.exports = router;
