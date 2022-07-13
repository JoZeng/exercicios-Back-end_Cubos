//valor do produto comprado.
const valorDoProduto = 1000.00;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 400.00;

const restodoproduto = valorDoProduto - valorPago;

const valordecadaparcela = valorDoProduto/quantidadeDoParcelamento.toFixed(2);

const parcelasrestantes = (valorDoProduto/valordecadaparcela)-(valorPago/valordecadaparcela);

if (true) {
    console.log(`Restam ${parcelasrestantes} parcelas de R${valordecadaparcela}`);
}