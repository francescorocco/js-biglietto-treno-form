const buttonCreate = document.querySelector('#leggiForm');
const buttonReset = document.querySelector('resetForm');

const nameUser = document.querySelector('#name');
const kmToDo = document.querySelector('#km');
const ageUser = document.querySelector('#age-select');

const ticketName = document.querySelector('ticket-name');
const ticketPrize = document.querySelector('tickeet-prize');
const ticketDiscount = document.querySelector('ticket-discount');

buttonCreate.addEventListener('click', 
    function () {

        ticketName.innerHTML = nameUser.value;
        

        const casellaSelezioneDom = document.getElementById('casellaSelezione');
        alert(casellaSelezioneDom.value);
    }
);







// const travelDistance = parseInt (prompt('Gentilmente inserisca il numero di chilometri della sua corsa'));
// console.log(travelDistance);

// let ticketCost = (travelDistance * 0.21);
// console.log(ticketCost);

// if (ageUser < 18){
//     ticketCost =  ticketCost + ((ticketCost / 100) * 20);
//     document.getElementById('sconto').innerHTML = 'Complimenti per essere così giovane, le abbiamo applicato uno sconto del 20%';
// }else if (ageUser > 65){
//     ticketCost = ticketCost + ((ticketCost / 100) * 40);
//     document.getElementById('sconto').innerHTML = 'Complimenti per essere così grande ed avere ancora la pazienza di utilizzare i nostri servizi, le abbiamo applicato uno sconto del 40%';
// }

// console.log(ticketCost);

// ticketCost = ticketCost.toFixed(2);
// console.log(ticketCost);

// document.getElementById('prezzo').innerHTML= 'Il prezzo del biglietto è di: ' + ticketCost + ' € ' ;
