const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

pares = []

for (let par of numeros) {
    if (par % 2 === 0) {
        pares.push(par)
    }
} // [ 4, 8, 6, 10]
let soma = 0;

for (let i = 0; i < pares.length; i++) {
    soma = soma + pares[i];
}

console.log(soma);
