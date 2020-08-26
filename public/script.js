var s = 0;
var a = 0;
var b = 0;
var level = 0;
var operacion = 0; 
var count = 10;

function toMenu() {
  count = 10;
  s = 0;
  var start = document.getElementById("start");
  var restart = document.getElementById("restart");
  var menu = document.getElementById("menu");
  document.getElementById("victory").style.display = "none";
  start.style.display = "none";
  restart.style.display = "none";
  menu.style.display = "inline";  
}

function toMenu1(n) {
  operacion = n; 
  count = 10;
  s = 0;
  var start = document.getElementById("start");
  var restart = document.getElementById("restart");
  var menu = document.getElementById("menu");
  var menu1 = document.getElementById("menu1");
  document.getElementById("victory").style.display = "none";
  start.style.display = "none";
  restart.style.display = "none";
  menu.style.display = "none";
  menu1.style.display = "inline"; 
}

function quiz(n) {
  level = n;
  count = 10;
  document.getElementById("input").focus();
  document.getElementById("input").select();
    
  var op = document.getElementById("op");
    
  if(operacion === 0){
      if(level === 0){
          console.log("Suma nivel facil");
          a = Math.floor(Math.random() * 10) + 1
          b = Math.floor(Math.random() * 6) + 1
      }
      if(level === 1){
          console.log("Suma nivel medio");
          a = Math.floor(Math.random() * 20) + 1
          b = Math.floor(Math.random() * 20) + 1
      }
      if(level === 2){
          console.log("Suma nivel dificil");
          a = Math.floor(Math.random() * 40) + 1
          b = Math.floor(Math.random() * 40) + 1
      }
      op.innerHTML = a + " + " + b;
  }
  if(operacion === 1){
      if(level === 0){
          console.log("Resta nivel facil");
          a = Math.floor(Math.random() * 10) + 1
          b = Math.floor(Math.random() * 10) + 1
          while(a<b){
            a = Math.floor(Math.random() * 10) + 1
          }
      }
      if(level === 1){
          console.log("Resta nivel medio");
          a = Math.floor(Math.random() * 20) + 1
          b = Math.floor(Math.random() * 20) + 1
          while(a<b){
            a = Math.floor(Math.random() * 20) + 1
          }
      }
      if(level === 2){
          console.log("Resta nivel dificil");
          a = Math.floor(Math.random() * 30) + 1
          b = Math.floor(Math.random() * 30) + 1
          while(a<b){
            a = Math.floor(Math.random() * 30) + 1
          }
      }
      op.innerHTML = a + " - " + b;
  }
  if(operacion === 2){
      if(level === 0){
          console.log("Multi nivel facil");
          a = Math.floor(Math.random() * 5) + 1
          b = Math.floor(Math.random() * 5) + 1
      }
      if(level === 1){
          console.log("Multi nivel medio");
          a = Math.floor(Math.random() * 8) + 1
          b = Math.floor(Math.random() * 8) + 1
      }
      if(level === 2){
          console.log("Multi nivel dificil");
          a = Math.floor(Math.random() * 12) + 1
          b = Math.floor(Math.random() * 12) + 1
      }
      op.innerHTML = a + " x " + b;
  }
  if(operacion === 3){
      if(level === 0){
          console.log("Divis nivel facil");
          a = Math.floor(Math.random() * 10) + 1
          b = Math.floor(Math.random() * 10) + 1
          while(a<b){
            a = Math.floor(Math.random() * 10) + 1
          }
          while(a%b!==0){
            b = Math.floor(Math.random() * a) + 1
            if(a%b===0){
                break;
            }
          }       
      }
      if(level === 1){
          console.log("Divis nivel medio");
          a = Math.floor(Math.random() * 20) + 1
          b = Math.floor(Math.random() * 20) + 1
          while(a<b){
            a = Math.floor(Math.random() * 20) + 1
          }
          while(a%b!==0){
            b = Math.floor(Math.random() * a) + 1
            if(a%b===0){
                break;
            }
          } 
      }
      if(level === 2){
          console.log("Divis nivel dificil");
          a = Math.floor(Math.random() * 30) + 1
          b = Math.floor(Math.random() * 30) + 1
          while(a<b){
            a = Math.floor(Math.random() * 30) + 1
          }
          while(a%b!==0){
            b = Math.floor(Math.random() * a) + 1
            if(a%b===0){
                break;
            }
          } 
      }
      op.innerHTML = a + " ÷ " + b;
  }
  
  var score = document.getElementById("score");
  var menu = document.getElementById("menu");
  var menu1 = document.getElementById("menu1");
  var question = document.getElementById("question");
  var answer = document.getElementById("answer");
  var input = document.getElementById("input");
  menu.style.display = "none";
  menu1.style.display = "none";
  score.style.display = "inline";
  score.innerHTML = "Puntaje: " + s + " de 10";
  question.style.display = "inline";
  answer.style.display = "inline";
  input.style.display = "inline";  
}

function check() {
  document.getElementById("output").style.display = "inline-block";
  if(operacion === 0){
    if (document.getElementById("input").value == a+b) {
        s = s + 1;
        document.getElementById("output").innerHTML = "Correcto!";
        document.getElementById("output").style.color = "green";
    }
    else {
       if (s > 0) {
           s = s - 1;
       }
        document.getElementById("output").innerHTML = "Prueba de nuevo!";
        document.getElementById("output").style.color = "red";
    }
      document.getElementById("input").value = "";
      if (s < 10) {
          quiz(level);
      }
      else {
          document.getElementById("score").style.display = "none";
          document.getElementById("answer").style.display = "none";
          document.getElementById("input").style.display = "none";
          document.getElementById("question").style.display = "none";
          document.getElementById("output").style.display = "none";
          document.getElementById("victory").style.display = "inline-block";
          document.getElementById("victory").innerHTML = "Felicidades! Ganaste!";
          document.getElementById("restart").style.display = "inline-block";
      }
  }
  if(operacion === 1){
    if (document.getElementById("input").value == a-b) {
        s = s + 1;
        document.getElementById("output").innerHTML = "Correcto!";
        document.getElementById("output").style.color = "green";
    }
    else {
       if (s > 0) {
           s = s - 1;
       }
        document.getElementById("output").innerHTML = "Prueba de nuevo!";
        document.getElementById("output").style.color = "red";
    }
      document.getElementById("input").value = "";
      if (s < 10) {
          quiz(level);
      }
      else {
          document.getElementById("score").style.display = "none";
          document.getElementById("answer").style.display = "none";
          document.getElementById("input").style.display = "none";
          document.getElementById("question").style.display = "none";
          document.getElementById("output").style.display = "none";
          document.getElementById("victory").style.display = "inline-block";
          document.getElementById("victory").innerHTML = "Felicidades! Ganaste!";
          document.getElementById("restart").style.display = "inline-block";
      }
  }
  if(operacion === 2){
    if (document.getElementById("input").value == a*b) {
        s = s + 1;
        document.getElementById("output").innerHTML = "Correcto!";
        document.getElementById("output").style.color = "green";
    }
    else {
       if (s > 0) {
           s = s - 1;
       }
        document.getElementById("output").innerHTML = "Prueba de nuevo!";
        document.getElementById("output").style.color = "red";
    }
      document.getElementById("input").value = "";
      if (s < 10) {
          quiz(level);
      }
      else {
          document.getElementById("score").style.display = "none";
          document.getElementById("answer").style.display = "none";
          document.getElementById("input").style.display = "none";
          document.getElementById("question").style.display = "none";
          document.getElementById("output").style.display = "none";
          document.getElementById("victory").style.display = "inline-block";
          document.getElementById("victory").innerHTML = "Felicidades! Ganaste!";
          document.getElementById("restart").style.display = "inline-block";
      }
  }
  if(operacion === 3){
    if (document.getElementById("input").value == a/b) {
        s = s + 1;
        document.getElementById("output").innerHTML = "Correcto!";
        document.getElementById("output").style.color = "green";
    }
    else {
       if (s > 0) {
           s = s - 1;
       }
        document.getElementById("output").innerHTML = "Prueba de nuevo!";
        document.getElementById("output").style.color = "red";
    }
      document.getElementById("input").value = "";
      if (s < 10) {
          quiz(level);
      }
      else {
          document.getElementById("score").style.display = "none";
          document.getElementById("answer").style.display = "none";
          document.getElementById("input").style.display = "none";
          document.getElementById("question").style.display = "none";
          document.getElementById("output").style.display = "none";
          document.getElementById("victory").style.display = "inline-block";
          document.getElementById("victory").innerHTML = "Felicidades! Ganaste!";
          document.getElementById("restart").style.display = "inline-block";
      }
  }
}