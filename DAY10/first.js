document.getElementById("calculate").addEventListener("click", function() {
    const income = parseFloat(document.getElementById("income").value);
    
    if (isNaN(income) || income <= 0) {
        alert("Please enter a valid income.");
        return;
    }
    
    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = income * 0.05;
    } else if (income <= 1000000) {
        tax = income * 0.1;
    } else {
        tax = income * 0.2;
    }

    document.getElementById("display-income").textContent = income.toFixed(2);
    document.getElementById("tax-payable").textContent = tax.toFixed(2);
});
