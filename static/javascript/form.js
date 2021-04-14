   
    function salvar(){
      email = document.getElementById("email").value;
      var email = localStorage.setItem("email",email);
      nome = document.getElementById("nome").value;
      var nome = localStorage.setItem("nome",nome);
      bairro = document.getElementById("bairro").value;
      var bairro=localStorage.setItem("bairro",bairro);
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
      confSenha=document.getElementById("confSenha").value;
      var confSenha=localStorage.setItem("confSenha",confSenha);
      alert("Salvo com sucesso");
 
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
      var bairro=localStorage.setItem("bairro",bairro);
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
      confSenha=document.getElementById("confSenha").value;
      var confSenha=localStorage.setItem("confSenha",confSenha);
      alert("alterado com sucesso");
 
  }

  function signUp(){
   var email = document.getElementById("email").value;
   var password =document.getElementById("password").value;
    if (email == localStorage.email && password == localStorage.password ){
         alert("email e senha confere");
    } 
    else{
       alert("email ou senha inválido");
       

    }
  
  }



  
      
     
   
    
