const numeros = [54, 22, 14 ,87 , 10, 284];

let resposta = -1;
for (let i=0; i < numeros.length; i++) {
    let numero = numero[i];
    if (numero === 10) {
        resposta = i ;
        break;
    }
}

console.log(resposta);