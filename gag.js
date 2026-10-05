let visor = document.getElementById('visor');
function adicionar(valor) {
    const visor = document.getElementById('visor');
    visor.value = visor.value + valor;
}
// Exemplo: adicionar('7') e adicionar('+')
// O visor passa a exibir: 7+
function limpar() {
    const visor = document.getElementById('visor');
    visor.value = '';
}
// limpar() prepara o visor para um novo cálculo.
function calcular() {
    const visor = document.getElementById('visor');

    try {
        const resultado = eval(visor.value);

        if (resultado !== undefined){
            visor.value = resultado;
        }
    } catch (erro) {
        visor.value = 'Erro';
    }
}