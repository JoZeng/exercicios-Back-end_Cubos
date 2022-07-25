const letras = ["A", "E", "e", "b", "a", "z"];

let quantidade = 0;

for (let letraE of letras) {
    if (letraE === "E") {
        quantidade++;
    }
}
for (let letrae of letras) {
    if (letrae === "e") {
        quantidade++;
    }
}
if (quantidade >= 1) {
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
}
else {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}