const numeros = [1, 4, 12, 21, 53, 88, 112];

pares = []

for (par of numeros) {
    if (par % 2 === 0) {
        pares.push(par)
    }
}

console.log(pares)