import { validateInput } from './modules/validation.js';
import { addNewExpense, getExpenses, deleteExpense } from './modules/expenseManager.js';
import { formatDate, capitalize } from './modules/utils.js';

const errorEl = document.getElementById("error");
const totalEl = document.getElementById("total");
const listEl = document.getElementById("expenseList");

// 🚀 ADD EXPENSE
window.addExpense = function () {
    const title = document.getElementById("title").value.trim();
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    try {
        errorEl.textContent = "";

        // Validation
        validateInput(title, amount, date);

        // Add Expense
        addNewExpense(title, amount, category, date);

        // Clear Inputs
        document.getElementById("title").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("category").value = "";
        document.getElementById("date").value = "";

        displayExpenses();

    } catch (err) {
        errorEl.textContent = "⚠️ " + err.message;
    }
};

// 📦 DISPLAY EXPENSES
function displayExpenses() {
    const expenses = getExpenses();

    listEl.innerHTML = "";
    let total = 0;

    if (expenses.length === 0) {
        listEl.innerHTML = `<p style="text-align:center;opacity:0.6;">No expenses yet 😌</p>`;
        totalEl.textContent = 0;
        return;
    }

    expenses.forEach(exp => {
        total += exp.amount;

        const div = document.createElement("div");
        div.className = "expense";

        div.innerHTML = `
            <div>
                <strong>${capitalize(exp.title)}</strong><br>
                <small>${getCategoryIcon(exp.category)} ${exp.category} • ${formatDate(exp.date)}</small>
            </div>

            <div>
                ₹${exp.amount}
                <span class="delete" onclick="removeExpense(${exp.id})">❌</span>
            </div>
        `;

        listEl.appendChild(div);
    });

    totalEl.textContent = total;
}

// 🗑️ DELETE
window.removeExpense = function (id) {
    deleteExpense(id);
    displayExpenses();
};

// 🔍 SEARCH
window.searchExpense = function () {
    const keyword = document.getElementById("search").value.toLowerCase();
    const items = document.querySelectorAll(".expense");

    items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(keyword)
            ? "flex"
            : "none";
    });
};

// 🎯 CATEGORY ICONS
function getCategoryIcon(category) {
    switch (category) {
        case "food": return "🍔";
        case "travel": return "✈️";
        case "shopping": return "🛍️";
        default: return "📂";
    }
}

// 🚀 INITIAL LOAD
displayExpenses();