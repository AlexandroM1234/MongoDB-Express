const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Got Goals" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Set Goal" });
});
router.patch("/:id", (req, res) => {
  res.status(200).json({ message: `Updated Goal : ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Deleted Goal : ${req.params.id}` });
});

module.exports = router;
