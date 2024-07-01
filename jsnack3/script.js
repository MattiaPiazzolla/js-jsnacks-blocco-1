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
        // DICHIARO LA VARIABILE SUM
        let sum = 0;
        // CICLO GLI ELEMENTI CHE COMPOGNONO numberInput E GLI SOMMO TRA DI LORO
        for( let i = 0; i < numberInput.length; i++){
            sum += parseInt(numberInput[i]);
            console.log(sum)
            // chiedi perche su console log stampa ogni passaggio della somma 
        }
        // MOSTRA IL RISULTATO NELLA PAGINA HTML
        document.getElementById('output').innerHTML = `<p class="text-center mt-5 fs-1">La somma delle cifre è: ${sum}</p>`;
    }
})