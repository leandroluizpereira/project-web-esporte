


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB2g-y_9gpMwgenBEzG_7aXFwgmUcR2HHc",
    authDomain: "project-web-6daa8.firebaseapp.com",
    projectId: "project-web-6daa8",
    storageBucket: "project-web-6daa8.appspot.com",
    messagingSenderId: "227416522409",
    appId: "1:227416522409:web:44c134c5b1bfdad1efb3b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 function signIn(){
   var email = document.getElementById("email").value;
   if (email == ""){
    alert("O e-mail deve ser preenchido!");
   }
   else{
   alert("E-mail Cadastrado com sucesso!!!"+email);
   }
 }