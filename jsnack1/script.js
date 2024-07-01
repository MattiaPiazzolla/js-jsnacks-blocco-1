// DEFINISCO UN'ARRAY CON LA LISTA DEGLI INVITATI
let guestList = ['fabrizio mastrobattista', 'luigi micco', 'alessio crea', 'Jay Gatsby', 'Nick Carraway', 'Daisy Buchanan', 'Myrtle Wilson', 'mattia piazzolla']; 
// RECUPERO IL PULSANTE PER AVVIARE IL CHECK
const checkNameBtn = document.getElementById('checkName');
// DETERMINO LE ISTRUZIONI PER UN EVENTO CLICK DEL PULSANTE
checkNameBtn.addEventListener('click', function(){
    // RECUPER IL VALORE DEL CAMPO IMPUT
    let nameInput = document.getElementById('nameInput').value.toLocaleLowerCase();
    // VARIABILE DI CONTROLLO O FLAG 
    let invited = false;
    // CICLO L'ARRAI PER CONFRONTARE I SUOI ELEMENTI CON L'INPUT
    for (let i = 0; i < guestList.length; i++){
        // CONDIZIONE IN CUI IL VALORE DI INPUT COMBACIA CON UN ELEMENT DELL'ARRAY
        if (guestList[i].toLocaleLowerCase() === nameInput){
            invited = true;
        }
    }
    // MESSAGGIO DI OUTPUT
    if (invited === true){
        console.log("INVITATO")
        document.getElementById('inviteTicket').classList.remove('d-none')
    } else {
        console.log("NON INVITATO")
        document.getElementById('notInvited').innerHTML=`<p class="d-block text-center text-danger mt-5 fs-1">Non sei stato invitato alla festa</p>`
}
})