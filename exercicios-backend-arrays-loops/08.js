const numeros = [3, 4, 1, 8, 11, 7, 5];

let maiorateagora = numeros[0]
for (let numero of numeros) {

    if(numero > maiorateagora) {
        maiorateagora = numero;
    }
}
console.log(maiorateagora);