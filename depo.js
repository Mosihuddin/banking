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

//  widthraw handler

document.getElementById('withdraw-button').addEventListener('click', function () {

    // console.log('button clicked');
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);
    // console.log(withdrawAmount);
    currentWithdraw = document.getElementById('withdraw-total');
    const currentWithdrawText = currentWithdraw.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawText);
    const newtotalWidthraw = currentWithdrawAmount + withdrawAmount;



    currentWithdraw.innerText = newtotalWidthraw;

    // new balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalAmount - withdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';

})