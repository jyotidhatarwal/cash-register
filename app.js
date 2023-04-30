var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var buttonCheck = document.querySelector("#btn-check");
var errorMessage = document.querySelector("#error-message");
var moneyDenominationReturned = document.querySelectorAll(".notes-need-to-returned");

var denominationsAvailable = ["2000","500","100","20","10","5","1"];

function validateBillAndCashAmount(){
    errorMessage.style.display = "none";
    if(billAmount.value > 0){
       if(cashGiven.value >= billAmount.value){
            var amountNeedsToBeReturned = cashGiven.value - billAmount.value;
            returnAmount(amountNeedsToBeReturned);
       }else{
        showErrorMessage("Cash Given is less than the Bill, Do you want to clean the Dishes to settle Payment!")
       }
    }else{
        showErrorMessage("Invalid Amount");
    }
}

function returnAmount(amount){
    for(var i=0;i<denominationsAvailable.length;i++){
        var denominationReturned = Math.trunc(amount/denominationsAvailable[i]);
        amount = amount % denominationsAvailable[i];
        moneyDenominationReturned[i].innerText = denominationReturned;
    }
}

function showErrorMessage(message){
    errorMessage.style.display = "block"
    errorMessage.innerText = message;
}


buttonCheck.addEventListener("click",validateBillAndCashAmount);