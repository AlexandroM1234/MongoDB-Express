const registerUser = (req, res) => {
  res.json({ message: "Register user" });
};

const loginUser = (req, res) => {
  res.json({ message: "login user" });
};
const getMe = (req, res) => {
  res.json({ message: "User data" });
};

module.exports = { registerUser, loginUser, getMe };
