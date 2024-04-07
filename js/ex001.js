let pessoa = {
    "nome": "Lucas",
    'sobrenome': 'Melo',
    'idade': 23,
    'profissao': 'Dev',
    'naturalidade': 'Sergipe'
}

//NOME
let elementoNome = document.getElementById('saidaNome');

elementoNome.addEventListener('click', trocaNome);
function trocaNome() {
    elementoNome.innerText = pessoa.nome;
}

//SOBRENOME
let elementoSobrenome = document.getElementById('saidaSobrenome');

elementoSobrenome.addEventListener('click', trocaSobrenome);
function trocaSobrenome(){
    elementoSobrenome.innerText = pessoa.sobrenome;
}

//IDADE
let elementoIdade = document.getElementById('saidaIdade');

elementoIdade.addEventListener('click', trocaIdade);
function trocaIdade(){
    elementoIdade.innerText = pessoa.idade;
}

//PROFISSAO
let elementoProfissao = document.getElementById('saidaProfissao');

elementoProfissao.addEventListener('click', trocaProfissao);
function trocaProfissao(){
    elementoProfissao.innerText = pessoa.profissao;
}

//NATURALIDADE
let elementoNaturalidade = document.getElementById('saidaNaturalidade');

elementoNaturalidade.addEventListener('click', trocaNaturalidade);
function trocaNaturalidade(){
    elementoNaturalidade.innerText = pessoa.naturalidade;
}




