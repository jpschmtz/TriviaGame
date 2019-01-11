
var qBank = {
    q1:{
        qText:"Question 1",
        qAns:{
            wrongAns:{
                text: "wrong",
                value : false
            },
            correctAns: {
                text: "correct",
                value : true
            }
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
var time;
var windowTimeout;

function reset() {
    // clearTimeout(windowTimeout);
    time = 10000;
    $("#question").text("" + qBank.q1.qText + "");
    $("#ans1").html("" + qBank.q1.qAns.wrongAns.text + "");
    $("#ans1").val("" + qBank.q1.qAns.wrongAns.value + "");

    $("#ans2").html("" + qBank.q1.qAns.wrongAns.text + "");
    $("#ans2").val("" + qBank.q1.qAns.wrongAns.value + "");

    $("#ans3").html("" + qBank.q1.qAns.correctAns.text + "");
    $("#ans3").val("" + qBank.q1.qAns.correctAns.value + "");

    $("#ans4").html("" + qBank.q1.qAns.wrongAns.text + "");
    $("#ans4").val("" + qBank.q1.qAns.wrongAns.value + "");

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
    // reset()
}
window.onload = function() {
    reset()
    // $(".buttons").on("click", ansCheck);
    $(".buttons button").click(function(){
        console.log(this.id);
        console.log($(this).attr('value'));
        answer = $(this).attr('value')
        if(answer == "true"){
            alert("Correct!")
        } else {
            alert("Incorrect!")
        }

    })
};

