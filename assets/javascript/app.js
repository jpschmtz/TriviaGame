
var qBank = {
    q1:{
        qText:"What is Captain Kirk's full name?",
        qAns:{ 
            correctAns: {
                text: "James Tiberius Kirk",
                value : true
            },
            wrongAns1:{
                text: "James Tiger Kirk",
                value : false
            },
            wrongAns2:{
                text: "William Shatner",
                value : false
            },
            wrongAns3:{
                text: "Jimmy Da Cheese",
                value : false
            }
        }
    },
    q2:{
        qText:"Where was Capatin Kirk born?",
        qAns:{
            correctAns: {
                text: "Riverside, Iowa",
                value : true
            },
            wrongAns1:{
                text: "Mars",
                value : false
            },
            wrongAns2:{
                text: "Las Vegas, Nevada",
                value : false
            },
            wrongAns3:{
                text: "The Bronx, New York",
                value : false
            }
        }
    },
    q3:{
        qText:"What was the name of Captain Kirk's vessel?",
        qAns:{
            correctAns: {
                text: "USS Enterprise",
                value : true
            },
            wrongAns1:{
                text: "Death Star",
                value : false
            },
            wrongAns2:{
                text: "Deep Space Nine",
                value : false
            },
            wrongAns3:{
                text: "USS Defiant",
                value : false
            }
        }
    }

};

var clockRunning;
var random=Math.floor(Math.random() * 2);
var correctAnswer;
var time;
var windowTimeout;
var winCount;

function first() {
    // clearTimeout(windowTimeout);
    time = 10000;
    $("#question").text("" + qBank.q1.qText + "");
    $("#ans1").html("" + qBank.q1.qAns.wrongAns1.text + "");
    $("#ans1").val("" + qBank.q1.qAns.wrongAns1.value + "");

    $("#ans2").html("" + qBank.q1.qAns.wrongAns2.text + "");
    $("#ans2").val("" + qBank.q1.qAns.wrongAns2.value + "");

    $("#ans3").html("" + qBank.q1.qAns.correctAns.text + "");
    $("#ans3").val("" + qBank.q1.qAns.correctAns.value + "");

    $("#ans4").html("" + qBank.q1.qAns.wrongAns3.text + "");
    $("#ans4").val("" + qBank.q1.qAns.wrongAns3.value + "");

    console.log("Cleared")
    setInterval(count, 1000);
    windowTimeout = setTimeout(function() {
        alert("Times Up!");
        }, time);
  }

  function second(){
    time = 10000;
    $("#question").text("" + qBank.q2.qText + "");
    $("#ans1").html("" + qBank.q2.qAns.wrongAns1.text + "");
    $("#ans1").val("" + qBank.q2.qAns.wrongAns1.value + "");

    $("#ans2").html("" + qBank.q2.qAns.correctAns.text + "");
    $("#ans2").val("" + qBank.q2.qAns.correctAns.value + "");

    $("#ans3").html("" + qBank.q2.qAns.wrongAns2.text + "");
    $("#ans3").val("" + qBank.q2.qAns.wrongAns2.value + "");

    $("#ans4").html("" + qBank.q2.qAns.wrongAns3.text + "");
    $("#ans4").val("" + qBank.q2.qAns.wrongAns3.value + "");

    console.log("Cleared")
    setInterval(count, 1000);
    windowTimeout = setTimeout(function() {
        alert("Times Up!");
        }, time);
  }

  function third(){
    time = 10000;
    $("#question").text("" + qBank.q3.qText + "");
    $("#ans1").html("" + qBank.q3.qAns.correctAns.text + "");
    $("#ans1").val("" + qBank.q3.qAns.correctAns.value + "");

    $("#ans2").html("" + qBank.q3.qAns.wrongAns1.text + "");
    $("#ans2").val("" + qBank.q3.qAns.wrongAns1.value + "");

    $("#ans3").html("" + qBank.q3.qAns.wrongAns2.text + "");
    $("#ans3").val("" + qBank.q3.qAns.wrongAns2.value + "");

    $("#ans4").html("" + qBank.q3.qAns.wrongAns3.text + "");
    $("#ans4").val("" + qBank.q3.qAns.wrongAns3.value + "");

    console.log("Cleared")
    setInterval(count, 1000);
    windowTimeout = setTimeout(function() {
        alert("Times Up!");
        }, time);
  }


function count() {

    time=time-1000;
    console.log(time)
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

  function play(){
      first()
      $(".buttons button").click(function(){
        clearTimeout(windowTimeout)
        console.log(this.id);
        console.log($(this).attr('value'));
        answer = $(this).attr('value')
        if(answer == "true"){
            alert("Correct!")
            winCount++;
        } else {
            alert("Incorrect!")
        }
        second()
        $(".buttons button").click(function(){
            clearTimeout(windowTimeout)
            console.log(this.id);
            console.log($(this).attr('value'));
            answer = $(this).attr('value')
            if(answer == "true"){
                alert("Correct!")
                winCount++;
            } else {
                alert("Incorrect!")
            }
            third()
            $(".buttons button").click(function(){
                clearTimeout(windowTimeout)
                console.log(this.id);
                console.log($(this).attr('value'));
                answer = $(this).attr('value')
                if(answer == "true"){
                    alert("Correct!")
                    winCount++;
                } else {
                    alert("Incorrect!")
                }   

                })
            })
        })
    };

window.onload = function() {
    play()

    };

