
function getdInpoutValue (inputValue) {
    const depositInput = document.getElementById(inputValue);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';
    return depositAmount;
}

document.getElementById("deposit-btn").addEventListener('click', function(){
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getdInpoutValue('deposit-input');
    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;

    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;

    /* depositInput.value = ''; */

    const balance = document.getElementById('balance-total');
    const balanceTotal = balance.innerText;
    const previousBalance = parseFloat(balanceTotal);
    balance.innerText = previousBalance + depositAmount;

})
document.getElementById('withdraw-btn').addEventListener('click', function() {
   /*  const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    const withdrawAmountTotal = parseFloat(withdrawAmount);
 */ const withdrawAmountTotal = getdInpoutValue('withdraw-input');
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = withdrawTotal.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdraw);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmountTotal;
    /* withdrawInput.value = ''; */

    const balance = document.getElementById('balance-total');
    const mostBalance = balance.innerText;
    const previousBalance = parseFloat(mostBalance);
    balance.innerText = previousBalance - withdrawAmountTotal;

})