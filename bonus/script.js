// CREO UN ARRAY VUOTO
let numbers = [];
// DEFINISCO UN CICLO FOR PER CHIEDERE 6 VOLTE DI INSERIRE UN NUMERO 
for (let i = 0; i < 10; i++){
    let number = parseInt(prompt('Inserisci un numero'))
    // AGGIUNGO I NUMERI INSERITI NELL'ARRAY
    numbers.push(number);
}
// DICHIARO LA VARIABILE SUM
let sum = 0;
// CICLO GLI ELEMENTI CHE COMPOGNONO numberInput E GLI SOMMO TRA DI LORO
for( let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
document.getElementById('output').innerHTML = `<h1 class="text-center mt-5 fs-1">La somma delle cifre è: ${sum}</h1>`;
console.log(sum)

