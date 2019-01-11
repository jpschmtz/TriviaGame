
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
var winCount = 0;

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

    console.log("Q1")
    setInterval(count, 1000);
    windowTimeout = setTimeout(function() {
        alert("Times Up!");
        clearTimeout(windowTimeout)
        second()
        }, time);
    $(".buttons button").click(function(){
        console.log(this.id);
        console.log($(this).attr('value'));
        var answer1 = $(this).attr('value')
        if(answer1 == "true"){
            alert("Correct!")
            winCount++;
            clearTimeout(windowTimeout)
            second()
        } else {
            clearTimeout(windowTimeout)
            alert("Incorrect!")
            second()
        }
    })
  };

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

    $("#distraction").html('<img id="pic" src="assets/images/kirk.jpg" /> James Tiberius Kirk');

    console.log("Q2")
    setInterval(count, 1000);
    windowTimeout = setTimeout(function() {
        alert("Times Up!");
        clearTimeout(windowTimeout)
        third()
        }, time);
    $(".buttons button").click(function(){
        console.log(this.id);
        console.log($(this).attr('value'));
        var answer2 = $(this).attr('value')
        if(answer2 == "true"){
            alert("Correct!")
            winCount++;
            clearTimeout(windowTimeout)
            third()
        } else {
            clearTimeout(windowTimeout)
            alert("Incorrect!")
            third()
        }
    })
  };

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

    $("#distraction").html('<img id="pic" src="assets/images/iowa.jpg" /> Kirk is a Hawkeye!');

    console.log("Q3")
    setInterval(count, 1000);
    windowTimeout = setTimeout(function() {
        alert("Times Up!");
        clearTimeout(windowTimeout)
        results()
        }, time);
    $(".buttons button").click(function(){
        console.log(this.id);
        console.log($(this).attr('value'));
        var answer3 = $(this).attr('value')
        if(answer3 == "true"){
            alert("Correct!")
            winCount++;
            clearTimeout(windowTimeout)
            results()
        } else {
            clearTimeout(windowTimeout)
            alert("Incorrect!")
            results()
        }
    })
  };

  function results(){
      alert("You have gotten " + winCount + " questions correct!")
      $("#question").text("Thanks for playing! You have gotten " + winCount + " questions correct!");
      $("#ans1").html("Restart Game");
  
      $("#ans2").html("Restart Game");
  
      $("#ans3").html("Restart Game");
  
      $("#ans4").html("Restart Game");
      $("#distraction").html('<img id="pic" src="assets/images/ship.jpg" /> Enterprise, we will pick you up!');

      $(".buttons button").click(function(){
        winCount = 0
        first()
      })

  
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
    //   first()
    //   $(".buttons button").click(function(){

    //     console.log(this.id);
    //     console.log($(this).attr('value'));
    //     answer = $(this).attr('value')
    //     if(answer == "true"){
    //         alert("Correct!")
    //         winCount++;
    //         clearTimeout(windowTimeout)
    //         second()
    //     } else {
    //         clearTimeout(windowTimeout)
    //         alert("Incorrect!")
    //         second()
    //     }
        // second()
        // $(".buttons button").click(function(){
        //     clearTimeout(windowTimeout)
        //     console.log(this.id);
        //     console.log($(this).attr('value'));
        //     answer = $(this).attr('value')
        //     if(answer == "true"){
        //         alert("Correct!")
        //         winCount++;
        //     } else {
        //         alert("Incorrect!")
        //     }
        //     third()
        //     $(".buttons button").click(function(){
        //         clearTimeout(windowTimeout)
        //         console.log(this.id);
        //         console.log($(this).attr('value'));
        //         answer = $(this).attr('value')
        //         if(answer == "true"){
        //             alert("Correct!")
        //             winCount++;
        //         } else {
        //             alert("Incorrect!")
        //         }   
        //         results()

        //         })
        //     })
        // })
    };

window.onload = function() {
    first()

    };

