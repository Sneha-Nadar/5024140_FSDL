export function validateInput(title, amount, date) {
    if (!title || !amount || !date) {
        throw new Error("All fields are required!");
    }

    if (title.length < 3) {
        throw new Error("Title must be at least 3 characters.");
    }

    if (amount <= 0) {
        throw new Error("Amount must be greater than 0.");
    }

    return true;
}