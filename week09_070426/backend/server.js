const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middleware (Event Loop execution)
app.use(cors());
app.use(express.json());

// Callback + Event Loop demo
app.get("/", (req, res) => {
  setTimeout(() => {
    res.send("Server Running 🚀 (Event Loop Working)");
  }, 500);
});

// Routes
app.use("/api/expenses", require("./routes/expenseRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});