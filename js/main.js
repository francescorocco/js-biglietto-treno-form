const buttonCreate = document.querySelector('#readForm');
const buttonReset = document.querySelector('#resetForm');

let nameUser = document.querySelector('#name');
let kmToDo = document.querySelector('#km')

const ticketName = document.querySelector('#ticket-name');
let ticketPrize = document.querySelector('#ticket-prize');
const ticketDiscount = document.querySelector('#ticket-discount');

const ticket = document.querySelector('#ticket');

let carriage = document.querySelector('#carriage');
let trainNumber = document.querySelector('#train-number');

buttonCreate.addEventListener('click', 
    function () {

        let ageUser = document.querySelector('#age-select').value;
        let kmToDo = document.querySelector('#km').value;
        let ticketCost = (kmToDo * 0.21);
        ticketName.innerHTML = nameUser.value;
        ticket.className = "d-block";
        
        carriage.innerHTML = Math.floor((Math.random() * 9)) + 1;  
        trainNumber.innerHTML = Math.floor((Math.random() * 90000)) + 10000;     

        
        if (ageUser == 'minorenne'){
        
            ticketCost =  ticketCost + ((ticketCost / 100) * 20);
            ticketDiscount.innerHTML = 'Sconto Silver';
            
        }else if (ageUser == 'adulto'){
        
            ticketCost = ticketCost + ((ticketCost / 100) * 40);
            ticketDiscount.innerHTML = 'Sconto Premium';
        
        }else{
            ticketDiscount.innerHTML = 'Nessuno sconto';
        }

        ticketCost = ticketCost.toFixed(2);
        ticketPrize.innerHTML = ticketCost +'€';
    }
);

buttonReset.addEventListener('click', 
    function() {
        nameUser.value = "";
        kmToDo.value = "";
        ticket.className = "d-none";
    }
); 