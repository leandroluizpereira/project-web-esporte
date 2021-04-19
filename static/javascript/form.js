 function ch(){
   
   if(document.getElementById('checkTermo').checked){
    document.getElementById('btn').style.animation= "aparecer 2s linear";
   document.getElementById('btn').style.display="inline";
   }
   else {
   document.getElementById('btn').style.animation= "esconder 1s linear";
   document.getElementById('btn').style.display="none";
   }
  
 }

function salvar(){
   var count =0;

  if(document.getElementById("email").value.indexOf("@") == -1 || document.getElementById("email").value.indexOf(".") == -1) {
    alert("Insira um email válido");
   
}
else{
  count += 1;
}


  if(document.getElementById("email").value == ""){
    alert("Email deve ser cadastrado");
   
  }
 
  else {
    count += 1;
  email = document.getElementById("email").value;
  var email = localStorage.setItem("email",email);
  }
  if (document.getElementById("nome").value == ""){
    alert("O nome deve ser cadastrado");
  }
  else{
    count += 1;
  nome = document.getElementById("nome").value;
  var nome = localStorage.setItem("nome",nome);
  }
  if (document.getElementById("bairro").value == ""){
    alert("O bairro deve ser informado");
  }
  else{
    count += 1;
  bairro = document.getElementById("bairro").value;
  var bairro=localStorage.setItem("bairro",bairro);
  }
  if(document.getElementById("endereco").value ==""){
    alert("O endereço deve ser informado");
  }
  else {
    count += 1;
    endereco = document.getElementById("endereco").value;
    var endereco = localStorage.setItem("endereco",endereco);
  }
  if (document.getElementById("numero").value ==""){
    alert("O número deve ser informado ");
    
  }
  else{
    count += 1;
  numero = document.getElementById("numero").value;
  var numero = localStorage.setItem("numero",numero);
  }
  if( document.getElementById("telefone").value == ""){
    alert("O telefone deve ser informado");
  }
  else{
    count += 1;
  telefone = document.getElementById("telefone").value;
  var telefone = localStorage.setItem("telefone",telefone);
  }
  if(document.getElementById("celular").value == ""){
    alert("O celular deve ser informado");
  }
  else{
    count += 1;
  celular = document.getElementById("celular").value;
  var celular = localStorage.setItem("celular",celular);
  }
  if(document.getElementById("password").value == ""){
  alert("A senha deve ser informado");
  }
  else{
    count += 1;
  password=document.getElementById("password").value;
  var password = localStorage.setItem("password",password);
  }
  if(document.getElementById("confSenha").value ==""){
    alert ("precisa confirma senha");
  }
  else{
    count += 1;
  confSenha=document.getElementById("confSenha").value;
  var confSenha=localStorage.setItem("confSenha",confSenha);
  }
  if(document.getElementById("password").value == document.getElementById("confSenha").value && document.getElementById("password").value != ""){
  alert("as duas senhas estão confere! ");
  count += 1;
  }
  else{
   
  alert("A senha está incorreto ");
  }
  if(document.getElementById("checkTermo").checked==false){
  alert("O termo deve ser confirmado");
 
  }
  if(count>10){
  window.open('telaUsuario.html');
  }
}
function timeot(){
  alert("Salvo com sucesso");
  setTimeout(function() {
    window.location.href = "index.html";
}, 5000);
  
}



function ler(){
  alert("Bem-vindo "+localStorage.nome);
}

function alterar(){
  email = document.getElementById("email").value;
  var email = localStorage.setItem("email",email);
  nome = document.getElementById("nome").value;
  var nome = localStorage.setItem("nome",nome);
  bairro = document.getElementById("bairro").value;
  var bairro = localStorage.setItem("bairro",bairro);
  endereco = document.getElementById("endereco").value;
  var endereco = localStorage.setItem("endereco",endereco);
  numero = document.getElementById("numero").value;
  var numero = localStorage.setItem("numero",numero);
  telefone = document.getElementById("telefone").value;
  var telefone = localStorage.setItem("telefone",telefone);
  celular = document.getElementById("celular").value;
  var celular = localStorage.setItem("celular",celular);
  password=document.getElementById("password").value;
  var password = localStorage.setItem("password",password);
  confSenha = document.getElementById("confSenha").value;
  var confSenha=localStorage.setItem("confSenha",confSenha);
  alert("alterado com sucesso");

}

function signUp(){
  var email = document.getElementById("email").value;
  var password =document.getElementById("password").value;
  if (email == localStorage.email && password == localStorage.password){
        alert("email e senha confere");
        window.open('telaUsuario.html');

  } 
  else{
      alert("email ou senha inválido");
      window.open('login.html');
  }
}

function imagem(){ 
  document.querySelector("#imagem").addEventListener("change",function (){
  //instanciando objeto do FileReader para carregar imagem
  const ler = new FileReader();
  ler.addEventListener("load",() =>{
  localStorage.setItem("Imagem-recente",ler.result);
  });
  ler.readAsDataURL(this.files[0]);
  });
}

function carregarImagem(){
  document.addEventListener("DOMContentLoaded",() =>{
  const recentImageDataUrl = localStorage.getItem("Imagem-recente");
  if(recentImageDataUrl){
  document.querySelector("#imagemUsuario").setAttribute("src", recentImageDataUrl);
  }
 
  
  });
}



   



  
      
     
   
    
