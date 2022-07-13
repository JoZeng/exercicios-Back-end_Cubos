const rendaMensalEmCentavos = 3000.00;
// 18% da renda mensal
// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10000.00;

const parcelamensal = rendaMensalEmCentavos*0.18;

if (rendaMensalEmCentavos >= 2000.01) {
    console.log(`O valor da parcela desse mês é R$${parcelamensal.toFixed(2)} reais`);
}  else  {
    if (rendaMensalEmCentavos <= 2000) {
        console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
    }
}
