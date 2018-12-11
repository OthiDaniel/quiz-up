function score(){
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var correct = 0;

      if (question1 == "ECMAScript") {
        correct+=20;
      }
      if (question2 == "1995") {
        correct+=20;
      }
      if (question3 == ".js") {
        correct+=20;
      }
      if (question4 == "Brendan Eich") {
        correct+=20;
      }
      if (question5 == "undefined") {
        correct+=20;
      }
      if(correct <= 1){
        var messages="unlucky";
      }
      if (correct >1 && correct < 3) {
        var messages = "Try harder next time!";
      }
      if (correct > 3) {
        var messages = "Good. You got four correct";
      }
      if (correct > 4) {
        var messages ="Excellent. Move to the next module!";
      }
      $("#submit").click(function(event){
        event.preventDefault();
        $("#form").hide();
        $("#results").show();
      })

      document.getElementById("message").innerHTML = messages;
      document.getElementById("correct_number").innerHTML = "You got " + correct + " correct";
    };
