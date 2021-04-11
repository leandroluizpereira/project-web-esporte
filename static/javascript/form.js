   
    function salvar(){
      email = document.getElementById("email").value;
      var email = localStorage.setItem("email",email);
      nome = document.getElementById("nome").value;
      var nome = localStorage.setItem("nome",email);
      alert("o email "+localemail);

    }
    function ler(){

      var localemail = localStorage.getItem ("email","email");
     /* document.onchange.savar(); */

    }
   
    
