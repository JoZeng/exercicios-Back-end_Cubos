//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito ou dinheiro";
//valor da mercadoria (centavos)
const valorDoProduto = 123.00;

const descontocredito = valorDoProduto*0.05;
const descontocheque = valorDoProduto*0.03;
const descontodebitooudinheiro = valorDoProduto*0.1;

if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: R$${(valorDoProduto-descontocredito).toFixed(2)}`)
}  else if (tipoDePagamento === "cheque") {
    console.log(`Valor a ser pago: R$${(valorDoProduto-descontocheque).toFixed(2)}`)
}  else if (tipoDePagamento == "debito ou dinheiro") {
    console.log(`Valor a ser pago: R$${(valorDoProduto-descontodebitooudinheiro).toFixed(2)}`)
}