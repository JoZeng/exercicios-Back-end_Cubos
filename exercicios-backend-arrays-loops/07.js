const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomecomecadoscoma = []
for (let nome of nomes) {
    const inicial = nome [0]

    if (inicial === "A" || inicial === "a") {
       nomecomecadoscoma.push(nome);
    }
}
console.log(nomecomecadoscoma);