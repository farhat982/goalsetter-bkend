const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');
const { protect } = require('../middleware/authMiddleware');

//old code internal route controll
//router.get('/', (req, res) => {
//  res.status(200).json({ message: 'Get Goals' });
//});

//external route controller coming from goalController

//router.get('/', getGoals);
//router.post('/', setGoal);
// Because both of them on same route so theny can be destructured to one line as bleow

router.route('/').get(protect, getGoals).post(protect, setGoal);

//as above change to one line
//router.put('/:id', updateGoal);
//router.delete('/:id', deleteGoal);

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
