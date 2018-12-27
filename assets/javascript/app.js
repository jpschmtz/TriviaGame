
var qBank = {
    q1:{
        qText:"Question 1",
        qAns:{
            wrongAns: "wrong",
            correctAns: "correct",
        }
    },
    q2:{
        qText:"Question 1",
        qAns:{
            wrongAns: "wrong",
            correctAns: "correct",
        }
    }

}
var correctAnswer;

//  Timeouts in JavaScript
//  Set our window alert to run one second after the function's called.
var windowTimeout = setTimeout(function() {
alert("Times Up!");
}, 1000);

//  Cancel window alert on click.
$("#correctAnswer").on("click", function() {
//  Clear the timeout, and stop the window alert.
clearTimeout(windowTimeout);
});

