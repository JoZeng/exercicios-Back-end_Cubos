const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas : [],
}

const aulasdocurso = [
    {
        Aula :01 ,
        Identificador : 01,
        Nome_da_aula : "Introdução a programação"},
    {
        Aula :02 ,
        
        Identificador : 02,
        Nome_da_aula : "Variáveis"
    },
    {
        Aula :03 ,
        
        Identificador : 03,
        Nome_da_aula : "Condicionais"
    },
    {
        Aula :04 ,
        
        Identificador : 04,
        Nome_da_aula : "Arrays"
    },
]

curso.aulas.push(aulasdocurso[0])
curso.aulas.push(aulasdocurso[1])
curso.aulas.push(aulasdocurso[2])
curso.aulas.push(aulasdocurso[3])


console.log(curso);