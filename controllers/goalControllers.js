const getGoals = (req, res) => {
  res.status(200).json({ message: "Got Goals" });
};

const createGoal = (req, res) => {
  res.status(200).json({ message: "Created Goal" });
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: `Updated Goal : ${req.params.id}` });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ messge: `Deleted Goal: ${req.params.id}` });
};

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
