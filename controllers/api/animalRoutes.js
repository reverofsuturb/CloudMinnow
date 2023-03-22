const router = require('express').Router();
const {Animal, Product, User } = require('../../models');



//GET all users

// GET One User
router.get('/', async (req, res) => {
  try {
    const userData = await User.findOne(req.params.id, { include: Animal});
    if (!userData) {
      res.status(404).json({message: no});
      return;
    }
    res.status(200).json(userData)
   } catch(err) {
    res.status(500).json(err);
    }
  });








    router.post('/', async (req, res) => {
  try {

} catch (err) {

}
});


module.exports = router;