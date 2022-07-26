

const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let i=0; i < usuarios.length; i++) {
    if(usuarios[i].pets >= []) {
        usuarios.push(`Sou ${usuarios.nome[i]} e não tenho pets`);
} else{
}
}

console.log(usuarios);