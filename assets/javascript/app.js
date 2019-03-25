// set countdown timer to load new page and start counting down
// var newPage = loadNewPage(function() {


$('#quiz-form').hide();
$('#results').hide();

$('#start').on('click', function() {
  $('#quiz-form').show();
  $('#start').hide();
  timer();
})

function timer() {
  var timeRemaining = 60;
  var displayTime = setInterval(function(){
    $('#appendTime').text(timeRemaining + " seconds");
    timeRemaining--;
    if (timeRemaining === 0) {
      clearInterval(displayTime);
      $("#timer").hide();
      $("#timer-container").hide();
      onSubmit();

    }
  }, 1000)
};

$('#submit').on('click', function() {

    onSubmit();
    $("#timer").hide();
    $("#timer-container").hide();

    console.log(onSubmit);
})


function onSubmit() {
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 8;
    

    //compare correct value with input

    //i need to check for unanswered

    for (var i = 1; i <= 8; i++) {
       
        var radios = document.getElementsByName('q'+i);
        for(var j = 0; j < radios.length; j++) {
          var radio = radios[j];
          if(radio.value === "correct" && radio.checked) {
            correct++;
            unAnswered --;
          }

          else if(radio.value === "wrong" && radio.checked){
            incorrect++;
            unAnswered --;
          }
        }
    }
    $('#quiz-form').hide();
    $('#results').show();
    var results = document.getElementById("results");
    results.innerHTML = "You scored: " + correct + " Correct " + incorrect + " Incorrect " + unAnswered + " Unanswered"
    // alert("You scored " + score + " out of " + numOfQuestions);
    return false;
}