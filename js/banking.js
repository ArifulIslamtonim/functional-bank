
function getInputValue (inputValue) {
    const depositInput = document.getElementById(inputValue);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';
    return depositAmount;
}

function updateTotalField (depositField, depositAmount) {
    const depositTotal = document.getElementById(depositField);
    const depositTotalText = depositTotal.innerText;

    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
}

function getCurrentBalance () {
    const balance = document.getElementById('balance-total');
    const balanceTotal = balance.innerText;
    const previousBalance = parseFloat(balanceTotal);
    return previousBalance;
}
function updateBalance (depositAmount, isAdd) {
    const balance = document.getElementById('balance-total');
   /*  const balanceTotal = balance.innerText;
    const previousBalance = parseFloat(balanceTotal); */
    const previousBalance = getCurrentBalance();
    if (isAdd == true){
        balance.innerText = previousBalance + depositAmount;
    }else {
        balance.innerText = previousBalance - depositAmount;
    }
   
}

document.getElementById("deposit-btn").addEventListener('click', function(){
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
   
    // get current deposit
   /*  const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;

    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;

 */ const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
    
    updateTotalField ('deposit-total', depositAmount);
    updateBalance (depositAmount, true);
 }
    
    /* depositInput.value = ''; */

   /*  const balance = document.getElementById('balance-total');
    const balanceTotal = balance.innerText;
    const previousBalance = parseFloat(balanceTotal);
    balance.innerText = previousBalance + depositAmount; */
   

})
 document.getElementById('withdraw-btn').addEventListener('click', function() {
   /*  const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    const withdrawAmountTotal = parseFloat(withdrawAmount);
 */ const withdrawAmountTotal = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
     if (withdrawAmountTotal > 0 && withdrawAmountTotal <= currentBalance) {
        updateTotalField('withdraw-total', withdrawAmountTotal);
        updateBalance (withdrawAmountTotal, false);
     }
     if(withdrawAmountTotal > currentBalance){
        
     }

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = withdrawTotal.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdraw);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmountTotal; */
    // updateTotalField('withdraw-total', withdrawAmountTotal);
    /* withdrawInput.value = ''; */

   /*  const balance = document.getElementById('balance-total');
    const mostBalance = balance.innerText;
    const previousBalance = parseFloat(mostBalance);
    balance.innerText = previousBalance - withdrawAmountTotal;
 */
// updateBalance (withdrawAmountTotal, false);
})