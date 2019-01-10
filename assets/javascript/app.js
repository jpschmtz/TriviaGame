
var qBank = {
    q1:{
        qText:"Question 1",
        qAns:{
            wrongAns: "wrong",
            correctAns: "correct",
        }
    },
    q2:{
        qText:"Question 2",
        qAns:{
            wrongAns: "wrong",
            correctAns: "correct",
        }
    }

}

var clockRunning;
var random=Math.floor(Math.random() * 2);
var correctAnswer;
var time = 5000;
var windowTimeout;

function reset() {
    // clearTimeout(windowTimeout);
    time = 5000;
    $("#question").text("" + qBank.q1.qText + "");
    $("#ans1").attr('value', "" + qBank.q1.qAns.wrongAns[2] + "");
    $("#ans2").html("" + qBank.q1.qAns.wrongAns + "");
    $("#ans3").html("" + qBank.q1.qAns.correctAns + "");
    $("#ans4").html("" + qBank.q1.qAns.wrongAns + "");
    console.log("Cleared")
    setInterval(count, 1000);
    windowTimeout = setTimeout(function() {
        alert("Times Up!");
        }, time);
  }



function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
    time=time-1000;
    console.log(time)
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    
    if (time>=0) {
        console.log(converted);
        $("#display").text(converted);
    }
  }
  function timeConverter(t) {

    var seconds = Math.floor(t / 1000);
    var minutes = "0";
    return "Seconds Remaining " + seconds;
  }

function ansCheck() {

    console.log(this);
    alert("pause");
    reset()
}
window.onload = function() {

    reset()
    $(".buttons").on("click", ansCheck);
};

