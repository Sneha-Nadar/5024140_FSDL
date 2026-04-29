import { saveToLocal, loadFromLocal } from './storage.js';

let expenses = loadFromLocal();

export function addNewExpense(title, amount, category, date) {
    const expense = {
        id: Date.now(),
        title,
        amount: Number(amount),
        category,
        date: new Date(date)
    };

    expenses.push(expense);
    saveToLocal(expenses);
}

export function deleteExpense(id) {
    expenses = expenses.filter(e => e.id !== id);
    saveToLocal(expenses);
}

export function getExpenses() {
    return expenses;
}