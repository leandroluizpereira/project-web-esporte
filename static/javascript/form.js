   
    function salvar(){

      email = document.getElementById("email").value;
      var email = localStorage.setItem("email",email);
      nome = document.getElementById("nome").value;
      var nome = localStorage.setItem("nome",nome);
      bairro=document.getElementById("bairro").value;
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
      alert("o email"); 
    }
      function ler(){
        email = document.getElementById("email").value;
        var email = localStorage.getItem("email",email);
        nome = document.getElementById("nome").value;
        var nome = localStorage.getItem("nome",nome);
        bairro = document.getElementById("bairro").value;
        var bairro = localStorage.getItem("bairro",bairro);
        endereco = document.getElementById("endereco").value;
        var endereco = localStorage.getItem("endereco",endereco);
        numero = document.getElementById("numero").value;
        var numero = localStorage.getItem("numero",numero);
        telefone = document.getElementById("telefone").value;
        var telefone = localStorage.getItem("telefone",telefone);
        celular = document.getElementById("celular").value;
        var celular = localStorage.getItem("celular",celular);
        password = document.getElementById("password").value;
        var password = localStorage.getItem("password",password);
        confSenha = document.getElementById("confSenha").value;
        var confSenha = localStorage.getItem("confSenha",confSenha);
        

        
        
        
    }
   
    
