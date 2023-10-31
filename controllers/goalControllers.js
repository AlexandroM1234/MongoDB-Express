const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Got Goals" });
});

const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Created Goal" });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated Goal : ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ messge: `Deleted Goal: ${req.params.id}` });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
