

 function signIn(){
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   if (email == ""){
    alert("O e-mail deve ser preenchido!");
   }
   else{
    alert("E-mail Cadastrado com sucesso!!!"+email);
    auth.createUserWithEmailAndPassword(email,password);
   }
 }
 
