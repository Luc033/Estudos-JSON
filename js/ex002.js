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
    if(elementoNome.innerText !== pessoa.nome){
        elementoNome.innerText = pessoa.nome;
    }else{
        elementoNome.innerText = 'Clique aqui!';
    }
}

//SOBRENOME
let elementoSobrenome = document.getElementById('saidaSobrenome');

elementoSobrenome.addEventListener('click', trocaSobrenome);
function trocaSobrenome() {
    if(elementoSobrenome.innerText !== pessoa.sobrenome){
        elementoSobrenome.innerText = pessoa.sobrenome;
    }else{
        elementoSobrenome.innerText = 'Clique aqui!';
    }
}

//IDADE
let elementoIdade = document.getElementById('saidaIdade');

elementoIdade.addEventListener('click', trocaIdade);
function trocaIdade() {
    if(elementoIdade.innerText !== pessoa.idade.toString()){
        elementoIdade.innerText = pessoa.idade;
    }else{
        elementoIdade.innerText = 'Clique aqui!';
    }
}
//PROFISSAO
let elementoProfissao = document.getElementById('saidaProfissao');

elementoProfissao.addEventListener('click', trocaProfissao);
function trocaProfissao() {
    if(elementoProfissao.innerText !== pessoa.profissao){
        elementoProfissao.innerText = pessoa.profissao;
    }else{
        elementoProfissao.innerText = 'Clique aqui!';
    }
}
//NATURALIDADE
let elementoNaturalidade = document.getElementById('saidaNaturalidade');

elementoNaturalidade.addEventListener('click', trocaNaturalidade);

function trocaNaturalidade() {
    if(elementoNaturalidade.innerText !== pessoa.naturalidade){
        elementoNaturalidade.innerText = pessoa.naturalidade;
    }else{
        elementoNaturalidade.innerText = 'Clique aqui!';
    }
}



