// CREO UN ARRAY VUOTO
let oddNumbers = [];
// DEFINISCO UN CICLO FOR PER CHIEDERE 6 VOLTE DI INSERIRE UN NUMERO 
for (let i = 0; i < 6; i++){
    let number = parseInt(prompt('Inserisci un numero'))
    // CONTROLLO I NUMERI DISPARI E GLI INSERISCO NELL'ARRAY CON PUSH
    if (number %2 !== 0){
        oddNumbers.push(number)
    }
}
console.log(oddNumbers)