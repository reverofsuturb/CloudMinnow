const router = require('express').Router();
const {Animal, Product, User } = require('../../models');



//GET all Animals
router.get('/', async (req, res) => {
  try{
    const animalData = await Animal.findAll({include: User});
    res.status(200).json(animalData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// GET One Animal
router.get('/:id', async (req, res) => {
  try {
    const animalData = await User.findOne(req.params.id, {include: Product});
    if (!animalData) {
      res.status(404).json({message: 'No animal with this id'});
      return;
    }
    res.status(200).json(animalData)
   } catch(err) {
    res.status(500).json(err);
    }
  });


//POST ANIMAL

    router.post('/', async (req, res) => {
  try {

} catch (err) {

}
});

//UPDATE ANIMAL
//DELETE ANIMAL


module.exports = router;