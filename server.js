const express = require("express");
const dotenv = require("dotenv").config();
const goalsRoute = require("./routes/goalsRoute");
const userRoute = require("./routes/userRoute");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalsRoute);
app.use("/api/users", userRoute);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
