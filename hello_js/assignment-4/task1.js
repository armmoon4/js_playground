function calculateTax(income, expenses) {
    if (typeof income !== "number" || typeof expenses !== "number" || income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }

    let difference = income - expenses;
    let tax = difference * 0.2;
    return tax;
}
