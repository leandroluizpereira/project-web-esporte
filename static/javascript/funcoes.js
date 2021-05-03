


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
  }, 5000);
}

window.onscroll = function() {myFunction()};

function myFunction() {


  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("h1").style.animation= "lateral  .3s linear";
    document.getElementById("grid").style.animation= "lateral  .5s linear";
  }
  if (document.body.scrollTop > 4050 || document.documentElement.scrollTop > 4050) {
    document.getElementById("h1-surf").style.animation= "lateral  .3s linear";
    document.getElementById("grid2").style.animation= "lateral  .5s linear";

  }

  if (document.body.scrollTop > 6050 || document.documentElement.scrollTop > 6050) {
    document.getElementById("h1-futebol").style.animation= "lateral  .3s linear";
    document.getElementById("grid3").style.animation= "lateral  .5s linear";
    
  }
  
  if (document.body.scrollTop > 8750 || document.documentElement.scrollTop > 8750) {
    document.getElementById("h1-motor").style.animation= "lateral  .3s linear";
    document.getElementById("grid4").style.animation= "lateral  .5s linear";
    
  }
  
}


