import { validateInput } from './modules/validation.js';
import { addNewExpense, getExpenses, deleteExpense } from './modules/expenseManager.js';
import { formatDate, capitalize } from './modules/utils.js';

window.addExpense = function () {
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const error = document.getElementById("error");

    try {
        error.textContent = "";

        validateInput(title, amount, date);

        addNewExpense(title, amount, category, date);

        displayExpenses();

    } catch (e) {
        error.textContent = e.message;
    }
};

function displayExpenses() {
    const list = document.getElementById("expenseList");
    const totalEl = document.getElementById("total");

    list.innerHTML = "";
    let total = 0;

    const expenses = getExpenses();

    expenses.forEach(exp => {
        total += exp.amount;

        const div = document.createElement("div");
        div.className = "expense";

        div.innerHTML = `
            ${capitalize(exp.title)} - ₹${exp.amount} 
            (${exp.category}) - ${formatDate(exp.date)}
            <span class="delete" onclick="remove(${exp.id})">❌</span>
        `;

        list.appendChild(div);
    });

    totalEl.textContent = total;
}

window.remove = function (id) {
    deleteExpense(id);
    displayExpenses();
};

window.searchExpense = function () {
    const keyword = document.getElementById("search").value.toLowerCase();
    const items = document.querySelectorAll(".expense");

    items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(keyword)
            ? "flex"
            : "none";
    });
};

displayExpenses();