var modern_score = 0;
var oldskl_score = 0;

var question_count = 0;

var restart= document.getElementById("restart");

var revealResult= document.getElementById("reveal")

var result= document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", old);
q1a1.addEventListener("click", disable1);
q1a2.addEventListener("click", modern);
q1a2.addEventListener("click", disable1);

q2a1.addEventListener("click", modern);
q2a1.addEventListener("click", disable2);
q2a2.addEventListener("click", old);
q2a2.addEventListener("click", disable2);

q3a1.addEventListener("click", old);
q3a1.addEventListener("click", disable3);
q3a2.addEventListener("click", modern);
q3a2.addEventListener("click", disable3);

restart.addEventListener("click", restartPage);


function disable1(){
document.getElementById("q1a1").disabled = true;
document.getElementById("q1a2").disabled = true;
}

function disable2(){
document.getElementById("q2a1").disabled = true;
document.getElementById("q2a2").disabled = true;
}

function disable3(){
document.getElementById("q3a1").disabled = true;
document.getElementById("q3a2").disabled = true;
}

function old() {
  oldskl_score += 1;
  question_count += 1;

  console.log("Question count " + question_count + "  Old school count " + oldskl_score);

  if (question_count == 3) {
    console.log("The quiz is done");
    updateResult();
  }

}

function modern() {
  modern_score += 1;
  question_count += 1;

  console.log("Question count " + question_count + "  Modern count " + modern_score);

  if (question_count == 3) {
    console.log("The quiz is done");
    updateResult();
  }

}

function updateResult(){
  revealResult.addEventListener("click", display);
}

function display(){
  if (modern_score >= 2){
    result.innerHTML= "You are a modern romantic";
    read.innerHTML= "Go ahead and read 'It ends with us'";
    console.log("You are modern romantic");
  }
  else {
    result.innerHTML= "You are an old-school romantic";
    console.log("You are an old-school romantic");
    read.innerHTML="Go ahead and read 'Pride and Prejudice'";
  }
}

function restartPage(){
  result.innerHTML= "Your result is...";
  read.innerHTML="Go ahead and read...";
  question_count=0; 
  oldskl_score=0;
  modern_score=0;
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
}
