var calculateButton = document.getElementById("calculateButton");

function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var tipPercentage = 15; // Default tip percentage
    
    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);

    var tipResultElement = document.getElementById("tipResult");
    tipResultElement.innerHTML = "Recommended Tip: $" + tipAmount.toFixed(2) + " (" + tipPercentage + "% of $" + billAmount + ")" + "<br><br>Total amount: $" + totalAmount.toFixed(2);
}

calculateButton.addEventListener("click", calculateTip);