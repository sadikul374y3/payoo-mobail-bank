document.getElementById("log-out-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
  document.getElementById("home-page").style.display = "none";
});

// reuseable function get to value
function newFunction(id) {
  const countId = document.getElementById(id);
  const countValue = countId.value;
  const valueNumber = parseInt(countValue);
  return valueNumber;
}

// get to inner text
function getInnerText(id) {
  const textCount = document.getElementById(id);
  const valueText = textCount.innerText;
  const valueTextNumber = parseInt(valueText);
  return valueTextNumber;
}

// get to total Balance
function getInnerTextBalance(balances) {
  const ammountFullBalance = document.getElementById("available-balance");
  ammountFullBalance.innerText = balances;
}

const pinNumber = 1234;

const transactionData =[];

// send money section

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;

    const ammount = newFunction("ammount-add");

    const pin = newFunction("pin-number");

    const availableBalance = getInnerText("available-balance");
    console.log(availableBalance);

    if (accountNumber.length < 11) {
      alert("please type valid account number");
      return;
    }

    if (pin !== pinNumber) {
      alert("please type valid pin number");
      return;
    }

    const totalAvailableBalance = availableBalance + ammount;
    getInnerTextBalance(totalAvailableBalance);

    const data ={
      name : `Add Money : $${ammount}`,
      date : new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
  });

// toggling feture resuseable code

function togglingHandle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// button toggle handle

function btnTuggleHandle(id) {
  const activeBtn = document.getElementsByClassName("cart-btn-active");

  for (const btn of activeBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300")
  }

  document.getElementById(id).classList.remove("border-gray-300")
  document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}

//   toggling feture

document.getElementById("btn-add-money").addEventListener("click", function () {
  togglingHandle("add-money-section");

  btnTuggleHandle("btn-add-money")
});

document.getElementById("btn-cash-out").addEventListener("click", function () {
  togglingHandle("cash-out-section");

  btnTuggleHandle("btn-cash-out")
});



document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function () {
    togglingHandle("transfer-money-section");

    btnTuggleHandle("btn-transfer-money")
  });



document.getElementById("btn-get-bonus").addEventListener("click", function () {
  togglingHandle("get-bonus-section");

  btnTuggleHandle("btn-get-bonus")
});



document.getElementById("btn-pay-bill").addEventListener("click", function () {
  togglingHandle("pay-bill-section");

  btnTuggleHandle("btn-pay-bill")
});

document.getElementById("btn-transaction").addEventListener("click", function () {
  togglingHandle("transaction-section");

  btnTuggleHandle("btn-transaction")
});

// cash out section

document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const bank = document.getElementById("bank").value;
  const agentNumber = document.getElementById("agent-number").value;
  const cashOutValue = newFunction("cash-out-value");
  const pin = newFunction("pin-number-2");

  const availableBalance = getInnerText("available-balance");

  if (agentNumber.length < 11) {
    alert("please type valid account number");
    return;
  }

  if (pin !== pinNumber) {
    alert("please type valid pin number");
    return;
  }

  const totalAvailableBalance = availableBalance - cashOutValue;
  getInnerTextBalance(totalAvailableBalance);

  const data ={
      name : `Cash Out : $${cashOutValue}`,
      date : new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
});



// transaction section start

document.getElementById("btn-transaction").addEventListener("click", function(){
  const transactionContainer = document.getElementById('transaction-container')
  for(const data of transactionData){
    const div = document.createElement('div')

    div.innerHTML=`
    <div class="flex justify-between items-center bg-white mt-5 rounded-md p-2">
        <div class="flex items-center justify-between">
          <div class="h-11 w-11 flex items-center justify-center bg-[#F4F5F7] rounded-[50%]"><img src="./assets/wallet1.png" alt=""></div>
          <div class="ml-4">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
          </div>
        </div>
        <div>
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
    `
    transactionContainer.appendChild(div)
  }
})
