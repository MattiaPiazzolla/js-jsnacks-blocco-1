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
})