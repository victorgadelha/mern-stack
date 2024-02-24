// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' });
};

// @desc Set goals
// @route POST /api/goals
// @access Private

const setGoal = (req, res) => {
  res.status(200).json({ message: 'Set goals' });
};

// @desc Update goals
// @route PUT /api/goals
// @access Private

const updateGoal = (req, res) => {
  res.status(200).json({ message: 'Put goals' });
};

// @desc Delete goals
// @route DELETE /api/goals
// @access Private

const deleteGoal = (req, res) => {
  res.status(200).json({ message: 'Delete goals' });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
