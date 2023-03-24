const router = require("express").Router();
const { Animal, Product, User, Species } = require("../../models");
const withAuth = require("../../utils/auth");
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
console.log(newUser);
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = req.body.username;
      req.session.loggedIn = true;

      res.status(200).json(newUser);
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
      req.session.userId = user.id;
      req.session.username = req.body.username;
      req.session.loggedIn = true;

      res.status(200).json({ user, message: "Welcome to Fluffy!" });
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

// Update user
router.put("/:id", withAuth, (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((UserData) => {
      if (!UserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.status(200).json(UserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update user bio
router.put("/", withAuth, (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.session.userId,
    },
  })
    .then((UserData) => {
      if (!UserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.status(200).json(UserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user with this id" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
