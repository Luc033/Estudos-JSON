//OBJETO PESSOA
let pessoa = {
  nome: "Lucas",
  sobrenome: "Melo",
  idade: 23,
  profissao: "Dev",
  naturalidade: "Sergipe",
};

//ACESSANDO ELEMENTEOS DE SAIDA HTML
let elementoNome = document.getElementById("saidaNome");
let elementoSobrenome = document.getElementById("saidaSobrenome");
let elementoIdade = document.getElementById("saidaIdade");
let elementoProfissao = document.getElementById("saidaProfissao");
let elementoNaturalidade = document.getElementById("saidaNaturalidade");

//ACESSANDO O BUTTON DO HTML
let btn = document.getElementById("saidaBtn");

//EVENTO DE CLICK DO BUTTON
btn.addEventListener("click", function () {
  //FUNÇÃO PARA RETORNAR OS VALORES APÓS CLICK DO BUTTON
  //VERIFICANDO ELEMENTOS HTML E RETORNANDO VALORES
  if (elementoNome.innerText.trim() === "") {
    if (elementoSobrenome.innerText.trim() === "") {
      if (elementoIdade.innerText.trim() === "") {
        if (elementoProfissao.innerText.trim() === "") {
          if (elementoNaturalidade.innerText.trim() === "") {
            elementoNome.innerText = pessoa.nome;
            elementoSobrenome.innerText = pessoa.sobrenome;
            elementoIdade.innerText = pessoa.idade;
            elementoProfissao.innerText = pessoa.profissao;
            elementoNaturalidade.innerText = pessoa.naturalidade;
          }
        }
      }
    }
  } else {
    elementoNome.innerText = "";
    elementoSobrenome.innerText = "";
    elementoIdade.innerText = "";
    elementoProfissao.innerText = "";
    elementoNaturalidade.innerText = "";
  }
});
