const maior_idade = false

const usuarios = [
    {
        nome: "João",
        idade: 25,
        maior_idade
    },
    {
        nome: "Ana",
        idade: 18,
        maior_idade
    },
    {
        nome: "Beatriz",
        idade: 15,
        maior_idade
    },
    {
        nome: "Carlos",
        idade: 16,
        maior_idade
    },
    {
        nome: "Antonio",
        idade: 32,
        maior_idade
    },

]

for (let i=0; i < usuarios.length; i++) {
    if(usuarios[i].idade >= 18) {
        usuarios[i].maior_idade = true
} else{
}
}


console.log(usuarios);