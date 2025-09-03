document.getElementById('log-out-btn').addEventListener('click', function(){
    window.location.href='./index.html'
})



const pinNumber = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const ammount = parseInt(document.getElementById("ammount-add").value);
    const pin = parseInt(document.getElementById("pin-number").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
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
    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });




//   toggling feture

document.getElementById('btn-add-money').addEventListener('click', function(){
    document.getElementById('cash-out-section').style.display = 'none'
    document.getElementById('add-money-section').style.display = 'block'
})


document.getElementById('btn-cash-out').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'none'
    document.getElementById('cash-out-section').style.display = 'block'
})


// cash out section 



document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const agentNumber = document.getElementById("agent-number").value;
    const cashOutValue = parseInt(document.getElementById("cash-out-value").value);
    const pin = parseInt(document.getElementById("pin-number-2").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (agentNumber.length < 11) {
      alert("please type valid account number");
      return;
    }

    if (pin !== pinNumber) {
      alert("please type valid pin number");
      return;
    }

    const totalAvailableBalance = availableBalance - cashOutValue;
    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });
