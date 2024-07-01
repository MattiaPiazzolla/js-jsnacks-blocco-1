// RECUPERO IL PULSANTE DI INVIO DEL NUMERO
const numberSubBtn = document.getElementById('submitNumber');
// DICO AL PULSANTE DI ATTENDERE L'EVENTO CLICK
numberSubBtn.addEventListener('click', function(){
    // RECUPER IL VALORE DEL CAMPO IMPUT
    let numberInput = document.getElementById('numberInput').value;
    // CONTROLLO CHE IL NUMERO SIA EFFETTIVAMENTE DI 4 CIFRE 
    if (numberInput.length !== 4) {
        document.getElementById('output').innerHTML=`<p class="text-center text-danger mt-5">INSERIRE UN NUMERO DI 4 CIFRE</p>`
    } else {
        let cifre = parseInt(numberInput.split(''));
        console.log(cifre)
    }
})