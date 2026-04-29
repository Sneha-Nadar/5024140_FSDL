export function saveToLocal(expenses) {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

export function loadFromLocal() {
    return JSON.parse(localStorage.getItem("expenses")) || [];
}