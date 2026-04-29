const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// Add Expense
router.post("/", async (req, res) => {
  const { title, amount, category } = req.body;

  const newExpense = new Expense({
    title,
    amount,
    category,
  });

  await newExpense.save();
  res.json(newExpense);
});

// Get All
router.get("/", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;