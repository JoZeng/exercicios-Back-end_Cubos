//Num parque de diversões existe uma Montanha Russa Muito Assustadora. Por isso, nesta montanha russa não são permitidas pessoas:
//Menores de 12 anos
//Maiores de 65 anos
//Que possuam qualquer patologia cardíaca
//Menores de 150cm de altura

const idade = 15;
const possuiPatologia = false;
const altura = 170;
const ehEstudante = true;

if (possuiPatologia || idade <= 11 || idade >= 66 || altura <= 149){
    console.log("ACESSO NEGADO")
} else {
    if(ehEstudante || idade < 17) {
        console.log ("10 reais")
    }  else {
        console.log("20 reais")
    }
}