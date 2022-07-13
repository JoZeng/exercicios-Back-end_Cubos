const altura = 193;
//reprovado = altura < 179;
//libero = 180 > altura >= 185;
//ponteiro = 186 >= 195;
//oposto = 196 >= 205;
//central = 205

if (altura < 179) {
    console.log("REPROVADO")
} else if (altura <= 185){
    console.log("LIBERO")
} else if (altura <= 195){
    console.log("PONTEIRO")
} else if (altura <= 205){
    console.log("OPOSTO")
} else if (altura >= 206){
    console.log("CENTRAL")
}