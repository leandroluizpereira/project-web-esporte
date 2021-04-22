


function deletar(){
  document.getElementById("propaganda").style.display = "none";
  document.getElementById("grid-nba").style.gridTemplateColumns = "1fr";
  document.getElementById("grid-nba").style.marginRight ="100px";
  document.getElementById("grid-nba").style.marginLeft ="100px";
  console.log("Deu certo!");
}

window.addEventListener('scroll',function(){
     
  console.log("Scrool action");
}
);

function intervaloSplash(){

  setTimeout(function() {
    window.open('index_2.html','_self');
  }, 3000);
}