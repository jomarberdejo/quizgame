var userName;

function startButton() {
  userName= prompt("Enter Your Name: ");
  
  if (userName == null || userName== ""){
    alert("Please Input Your Name To Start.")
  }
  else{
    alert("Welcome " + userName);
    document.getElementById("start-container").style.display = "none";
    document.getElementById('intro').style.display= "block";
    document.getElementById('question-type').style.display= "flex";
    document.getElementById("quiz-score").style.display= "flex";
    document.getElementById("exit").style.display= "flex";
  } 
}


var question1Answered = false;
var score = 0;

function checkScore() {
  if (score == 3) {
    alert("Congratulations "+userName+",You Answered All The Questions Correctly! Take Me As Your Price");
  }
}

function displayQuestion1() {
    if (question1Answered) {
        alert("You have already answered this question!");
        return;
    }

    if (confirm("Are you sure you are ready to take on this question? ")== true) {
        var answer1 = prompt("Q1. ___ is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum.")
        
        if (answer1 == null || answer1== ""){
         alert("You didn't answer the question!")
       }

        else if (answer1.toUpperCase() == "PYTHON") {
            alert("Congrats, You Got It Right!")
            document.getElementById('q1-check').style.display= "inline-block";
            question1Answered = true;
            score += 1;
            document.getElementById('score').innerHTML= "Your Score: "+ score;
            checkScore()
            document.getElementById('paragraph1').innerHTML= "1. Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum."
            document.getElementById('paragraphs').style.display= "block";
        }
        
       
        else{
            alert("Oops, Try Again Later.")
          
        }
    }

    else{
        alert("Ok, Come Back Later")
    }
}


var question2Answered = false;

function displayQuestion2() {
    if (question2Answered) {
        alert("You have already answered this question!");
        return;
    }

    if (confirm("Would you like to give this question a shot?")== true) {
        var answer2 = prompt("Q2. ___ is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.")
       if (answer2 == null || answer2== ""){
         alert("You didn't answer the question!")
       }
       
        else if (answer2.toUpperCase() == "JAVASCRIPT" || answer2.toUpperCase()== "JAVA SCRIPT") {
            alert("Congrats, You Got It right")
            document.getElementById('q2-check').style.display= "inline-block";
            question2Answered = true;
            score += 1;
            document.getElementById('score').innerHTML= "Your Score: "+ score;
            checkScore();
            document.getElementById('paragraph2').innerHTML= "2. JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive."
            document.getElementById('paragraphs').style.display= "block";
        }
       else if (answer2 == null || answer2== ""){
        alert("You didn't answer the question!")
       }
        else{
            alert("Oops, Try Again Later.")
        }
    }

    else{
        alert("Ok, Come Back Later.")
    }
}

var question3Answered = false;

function displayQuestion3() {
    if (question3Answered) {
        alert("You have already answered this question!");
        return;
    }

    if (confirm("Are you ready to take on this challenge?")== true) {
        var answer3 = prompt("Q3. ___ is a server-side scripting language similar to Python and PERL. Also, can be used to write Common Gateway Interface (CGI) scripts. ")
        if (answer3 == null || answer3== ""){
         alert("You didn't answer the question!")
       }

        else if(answer3.toUpperCase() == "RUBY") {
            alert("Congrats, You Got It Right!")
            document.getElementById('q3-check').style.display= "inline-block";
            question3Answered = true;
            score += 1;
            document.getElementById('score').innerHTML= "Your Score: "+ score;
            checkScore();
            document.getElementById('paragraph3').innerHTML= "3. Ruby is a server-side scripting language similar to Python and PERL. Also, can be used to write Common Gateway Interface (CGI) scripts."
        }
        else if (answer3 == null || answer3== ""){
         alert("You didn't answer the question!")
       }
        else{
            alert("Oops, Try Again Later.")
        }
    }

    else{
        alert("Ok, Come Back Later.")
    }
}
