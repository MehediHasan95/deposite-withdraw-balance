// Deposit and Withdraw amount function
function updateInput(amount, inputId) {
  const inputField = document.getElementById(amount);
  const inputAmount = parseFloat(inputField.value);

  if (inputAmount > 0) {
    const totalAmount = document.getElementById(inputId);
    const previousAmount = parseFloat(totalAmount.innerText);
    const total = previousAmount + inputAmount;
    totalAmount.innerText = total;
  } else {
    alert("Please enter the positive number");
  }
  inputField.value = "";
  return inputAmount;
}

// Total Balance handle
function totalBalance(amount, isAdd) {
  const totalBalance = document.getElementById("total-balance");
  const currentTotalBalance = parseFloat(totalBalance.innerText);

  if (amount > 0 && currentTotalBalance > amount) {
    if (isAdd == true) {
      const inTotalBalance = currentTotalBalance + amount;
      totalBalance.innerText = inTotalBalance;
    } else {
      const inTotalBalance = currentTotalBalance - amount;
      totalBalance.innerText = inTotalBalance;
    }
  }
}

// Deposit Amount
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = updateInput("deposit-field", "deposit-amount");
    totalBalance(depositAmount, true);
  });

// Withdraw Amount
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = updateInput("withdraw-field", "withdraw-amount");
    totalBalance(withdrawAmount, false);
  });
