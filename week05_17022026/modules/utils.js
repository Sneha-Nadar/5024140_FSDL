export function formatDate(date) {
    return date.toLocaleDateString("en-IN");
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}