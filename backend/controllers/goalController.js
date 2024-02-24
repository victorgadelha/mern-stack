const asyncHandler = require('express-async-handler');
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Get goals' });
});

// @desc Set goals
// @route POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'Set goals' });
});

// @desc Update goals
// @route PUT /api/goals
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Put goals' });
});

// @desc Delete goals
// @route DELETE /api/goals
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Delete goals' });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
