const filaDeDentro = [];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length < 5) {
    const primeiroDeFora = filaDeFora.shift();
    //se nao tiver ninguem na fila de fora
    if (primeiroDeFora === undefined) {
        break;
    }
    filaDeDentro.push(primeiroDeFora);
}

console.log(filaDeDentro);
console.log(filaDeFora);