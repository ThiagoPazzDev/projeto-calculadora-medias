const form = document.getElementById('fatividade')
const imgAprovado = '<img src="./imagens/festa.png" alt="Emoji Festejando"/>'
const imgReprovado = '<img src="./imagens/triste.png" alt="Emoji Triste"/>'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite A Nota Minima:"))

let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    const nomeAtividade = inputNomeAtividade.value.trim();

    if (atividades.includes(nomeAtividade) || !isNaN(Number(nomeAtividade))) {
        alert(`O nome da Atividade não pode ser um número ou já foi inserido!`);
    }else{
        atividades.push(inputNomeAtividade.value)
        notas.push(Number(inputNotaAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`

        linhas = linha + linhas

    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado

}

function calculaMediaFinal(){
    let soma = 0

    for(let i = 0; i < notas.length; i++){
        soma += notas[i]
    }

    return soma / notas.length
}