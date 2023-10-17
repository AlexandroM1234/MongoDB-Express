const express = require("express");
const dotenv = require("dotenv").config();
const goalsRoute = require("./routes/goalsRoute");

const port = process.env.PORT || 5000;
const app = express();

app.use("/api/goals", goalsRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
