let Deposit = document.getElementById("deposit");
let Withdrow = document.getElementById("withdraw");
let Balance = document.getElementById("balance");
let Text = document.getElementById("text");
let Amount = document.getElementById("amount");
let List = document.getElementById("list");

// Transiction details
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

// Deposit Function
function Diposit() {
  event.preventDefault();
  let TextValue = Text.value;
  let AmountValue = Number(Amount.value);

  if (TextValue === "") {
    let dates = new Date();
    let year = dates.getFullYear();
    let month = dates.getMonth();
    let day = dates.getDate();
    TextValue = `${year}-${month + 1}-${day}`;
  }

  if (parseInt(AmountValue) < 100) {
    alert("Minimum value is 100");
    return;
  }

  datas.push({ TextValue, AmountValue: AmountValue, type: "Diposit" });

  let DepositValue = Number(Deposit.innerText);
  let BalanceValue = Number(Balance.innerText);

  let newDepositValue = DepositValue + AmountValue;
  let newBalanceValue = BalanceValue + AmountValue;

  Deposit.innerText = newDepositValue;
  Balance.innerText = newBalanceValue;
  updateUI();
}

// Withdraw Function
function Withdraw() {
  event.preventDefault();
  let TextValue = Text.value;
  let AmountValue = Number(Amount.value);

  if (TextValue === "") {
    let dates = new Date();
    let year = dates.getFullYear();
    let month = dates.getMonth();
    let day = dates.getDate();
    TextValue = `${year}-${month + 1}-${day}`;
  }

  if (AmountValue < 100) {
    alert("Minimum Withdraw value is $100");
    return;
  }

  let currentBalance = parseInt(Balance.innerText);
  if (AmountValue > currentBalance) {
    alert("Your account do not have balance");
    return;
  }

  datas.push({ TextValue, AmountValue, type: "Withdraw" });

  let WithdrawValue = Number(Withdrow.innerText);
  let BalanceValue = Number(Balance.innerText);

  let newWithdrawValue = WithdrawValue + AmountValue;
  let newBalanceValue = BalanceValue - AmountValue;

  Balance.innerText = newBalanceValue;
  Withdrow.innerText = newWithdrawValue;

  updateUI();
}
