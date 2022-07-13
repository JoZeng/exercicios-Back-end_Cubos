const ladoA = 5;
const ladoB = 4;
const peça = ladoA + ladoB;

if (ladoA != ladoB)  {

    console.log("Nao é uma bucha") 
} else if (peça === 0) {
    console.log("Essa peça é uma bucha e é uma branca")
} else if (peça === 2 ) {
    console.log("Essa peça é uma bucha e é um ás")
} else if (peça === 4 ) {
    console.log("Essa peça é uma bucha e é um duque")
} else if (peça === 6 ) {
    console.log("Essa peça é uma bucha e é um terno")
} else if (peça === 8 ) {
    console.log("Essa peça é uma bucha e é uma quadra")
} else if (peça === 10 ) {
    console.log("Essa peça é uma bucha e é uma quina")
} else if (peça === 12 ) {
    console.log("Essa peça é uma bucha e é um duque")
}