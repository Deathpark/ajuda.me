let cadastro = {}
var nome = document.getElementById("nome");
var senha = document.getElementById("senha");
var tipo = document.getElementById("tipo");
var nomeLogin = document.getElementById("nomel");
var cadastroLogin = document.getElementById("senhal");
function Cadastro(){
    cadastro = {
            'nome' : nome.value,
            'senha' :  senha.value,
            'tipo' : tipo.value,

    };
    localStorage.setItem('cadastro', JSON.stringify(cadastro));
}
function Login(){
    var nome_login = document.getElementById("nomel");
    var senha_login = document.getElementById("senhal");
    if(nome_login.value == JSON.parse(localStorage.getItem('cadastro').nome) &&
    senha_login.value == JSON.parse(localStorage.getItem('cadastro').senha)){
        alert("Login feito com sucesso");
        localStorage.setItem("logged", true);
    } else {
      localStorage.setItem("logged", false);
    }
    localStorage.getItem
}
