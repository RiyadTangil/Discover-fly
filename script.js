function ticketCounter(id, isIncrease) {
    const currentTicket = getInputValue(id);
    let newTicketCount = currentTicket;
    if (isIncrease == true) {
        newTicketCount = newTicketCount + 1;
    }
    else if (isIncrease == false && newTicketCount > 0) {
        newTicketCount = newTicketCount - 1;
    }
    document.getElementById(id).value = newTicketCount;
    totalCost();
}


function totalCost() {
    const firstTicketAmount = getInputValue('firstTicketNumber');
    const firstClassValue = 150 * firstTicketAmount;
    const economyTicketAmount = getInputValue('economyTicketNumber');
    const economyClassValue = 100 * economyTicketAmount;
    const subtotal = firstClassValue + economyClassValue;
    document.getElementById('subtotal').innerText = subtotal;
    const totalVat = subtotal * .10;
    document.getElementById('vat').innerText = totalVat;
    const grandTotal = subtotal + totalVat;
    document.getElementById('totalCost').innerText = grandTotal;
}

function getInputValue(product) {
    const inputValue = document.getElementById(product).value;
    const newInputValue = parseInt(inputValue);
    return newInputValue;
}

function userInformation(){
   document.getElementById('bookingFrom').style.display ="none";
   document.getElementById('booking-information').style.display = "block";
   document.getElementById('firstTicketInfo').innerText =  getInputValue('firstTicketNumber') ;
   document.getElementById('economyTicketInfo').innerText =  getInputValue('economyTicketNumber') ;
   document.getElementById('subtotalInfo').innerText = document.getElementById('subtotal').innerText ;
   document.getElementById('vatInfo').innerText =  document.getElementById('vat').innerText ;
   document.getElementById('totalCostInfo').innerText =  document.getElementById('totalCost').innerText ;
  
}


