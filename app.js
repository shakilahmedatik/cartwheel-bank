//Login button event handler.
const savedEmail = "test@gmail.com";
const savedPass = "admin123";

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const userEmail = document.getElementById("email").value;
  const userPass = document.getElementById("password").value;

  if (userEmail == savedEmail && userPass == savedPass) {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
  } else {
    alert("Username or Password is wrong.");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
});

//Deposit button event handler.
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositNumber = getInput("depositAmount");
  //Update Deposit Amount
  updateSpanText("currentDeposit", depositNumber);

  //Update Current Balance
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});

//Withdraw button event handler.
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInput("withdrawAmount");

  //Update withdraw amount.
  updateSpanText("currentWithdraw", withdrawNumber);

  //Update current balance after withdraw.
  updateSpanText("currentBalance", -1 * withdrawNumber);
  document.getElementById("withdrawAmount").value = "";
});

function getInput(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanText(id, number) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const total = number + currentNumber;
  document.getElementById(id).innerText = total;
}
