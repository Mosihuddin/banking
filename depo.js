// Only Deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log(' deposit button clicked');
    const depositInput = document.getElementById('deposit-amount');
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);
    // console.log(depositAmount);

    const currentDeposit = document.getElementById('deposit-total');
    const currentDepositText = currentDeposit.innerText;
    const currentDepositAmonut = parseFloat(currentDepositText);
    const newTotalDeposit = currentDepositAmonut + depositAmount;

    currentDeposit.innerText = newTotalDeposit;



    //balance-update

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalAmount + depositAmount;

    balanceTotal.innerText = newBalanceTotal;











    depositInput.value = '';

});
