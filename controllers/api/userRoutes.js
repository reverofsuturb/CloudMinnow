const router = require('express').Router();
const {Animal, Product, User} = require('../../models');


//USER GET ROUTES
//get all users
router.get('/', async (req, res) => {
  try{
    const userData = await User.findAll({include: Animal});
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
});
//get user by id
router.get('/:id', async (req, res) => {
try{
  const userData = await User.findOne(req.params.id, {include: Animal});
  if(!userData) {
    res.status(404).json({message: "No user with that id"});
    return;
  }
  res.status(200).json(userData);
} catch (err) {
    res.status(500).json(err);
  }
}
);


//POST USER
router.post('/', async (req, res) => {
  try {

} catch (err) {

}
});

//UPDATE USER

//DELETE USER


module.exports = router;