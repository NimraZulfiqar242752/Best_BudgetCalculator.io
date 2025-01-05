function calculateBudget() {
    const salary = parseFloat(document.getElementById('salary').value);
    const groceries = parseFloat(document.getElementById('groceries').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const car = parseFloat(document.getElementById('car').value);
    const other = parseFloat(document.getElementById('other').value);
    
    const totalExpenses = groceries + rent + car + other;
    const remainingSalary = salary - totalExpenses;
    
    document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
    document.getElementById('remainingSalary').textContent = remainingSalary.toFixed(2);
}

function resetForm() {
    document.getElementById('budgetForm').reset();
    document.getElementById('totalExpenses').textContent = '0';
    document.getElementById('remainingSalary').textContent = '0';
}



