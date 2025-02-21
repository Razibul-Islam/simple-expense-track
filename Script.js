let Deposit = document.getElementById("deposit");
let Withdrow = document.getElementById("withdraw");
let Balance = document.getElementById("balance");
let Form = document.getElementById("form");
let Text = document.getElementById("text");
let Amount = document.getElementById("amount");
let List = document.getElementById("list");

// Form manopulation
// Diposit
let datas = [];

// UI Update
function updateUI() {
  List.innerHTML = "";
  datas.map((data) => {
    let li = document.createElement("li");
    li.classList.add(data.type === "Diposit" ? "plus" : "minus");
    li.innerHTML = `${data.TextValue}<span>${data.type}</span><span>$${data.AmountValue}</span>`;
    List.appendChild(li);
  });
}

function Diposit() {
  event.preventDefault();
  let TextValue = Text.value;
  let AmountValue = Amount.value;

  if (parseInt(AmountValue) < 100) {
    alert("Minimum value is 100");
    return;
  }
  datas.push({ TextValue, AmountValue, type: "Diposit" });

  let DepositValue = Deposit.innerText;
  let BalanceValue = Balance.innerText;

  let newDepositValue = parseInt(DepositValue) + parseInt(AmountValue);
  let newBalanceValue = parseInt(BalanceValue) + parseInt(AmountValue);

  Deposit.innerText = newDepositValue;
  Balance.innerText = newBalanceValue;
  updateUI();
}
function Withdraw() {
  event.preventDefault();
  let TextValue = Text.value;
  let AmountValue = Amount.value;

  if (parseInt(AmountValue) < 100) {
    alert("Minimum Withdraw value is $100");
    return;
  }

  let currentBalance = parseInt(Balance.innerText);
  if (parseInt(AmountValue) > currentBalance) {
    alert("Your account do not have balance");
    return;
  }
  datas.push({ TextValue, AmountValue, type: "Withdraw" });

  let WithdrawValue = Withdrow.innerText;
  let BalanceValue = Balance.innerText;

  let newWithdrawValue = parseInt(WithdrawValue) + parseInt(AmountValue);
  let newBalanceValue = parseInt(BalanceValue) - parseInt(AmountValue);

  Balance.innerText = newBalanceValue;
  Withdrow.innerText = newWithdrawValue;

  updateUI();
}
