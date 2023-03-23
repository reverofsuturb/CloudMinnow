const router = require("express").Router();
const { Animal, Product, User, Species } = require("../../models");

//GET all Animals
router.get("/", async (req, res) => {
  try {
    const animalData = await Animal.findAll({
      include: [
        {
          model: Species,
          required: false,
        },
        {
          model: User,
          required: false,
        },
      ],
    });
    res.status(200).json(animalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET One Animal
router.get("/:id", async (req, res) => {
  try {
    const animalData = await Animal.findByPk(req.params.id, 
      {
        include: [
          {
            model: Species,
            required: false,
          },
          {
            model: User,
            required: false,
          },
        ],
      },
    );
    if (!animalData) {
      res.status(404).json({ message: "No animal with this id" });
      return;
    }
    res.status(200).json(animalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST ANIMAL

router.post("/", async (req, res) => {
  try {
    const newAnimal = await Animal.create({
      name: req.body.name,
      age: req.body.age,
      species_id: req.body.species_id,
      description: req.body.description,
      user_id: req.session.userId
    });
    res.status(200).json(newAnimal);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE ANIMAL
//DELETE ANIMAL
router.delete("/:id", async (req, res) => {
  try {
    const animalData = await Animal.destroy({
      where: {
        id: req.params.id
      }
      },
    );
    if (!animalData) {
      res.status(404).json({ message: "No animal with this id" });
      return;
    }
    res.status(200).json(animalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
