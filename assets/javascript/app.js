$(document).ready(function() {
var index = 0;
var countdownTimer = {
time : 45,
reset: function() {
this.time = 45;
$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
},
start: function() {
counter = setInterval(countdownTimer.count, 999);
},
stop: function() {
clearInterval(counter);
},
count: function() {
countdownTimer.time--;
console.log(countdownTimer.time);
if (countdownTimer.time >= 0) {
$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
}
else {
index++;
answerWrong();
countdownTimer.reset();
if (index < questionArray.length) {
loadQuestion(index);
} else {
$(".answerchoice").hide();
showScore();
}
}
}
};
var correct = 0;
var wrong = 0;
var q1 = {
question : "Inside which HTML element do we put the JavaScript?",
possibleAnswers : ["A. <javascript> ",
"B. <js> ",
"C. <script> ",
"D. <scripting> "],
flags : [false, false, true, false],
answer : "C. <script> "
};
var q2 = {
question: "Where is the correct place to insert a JavaScript?",
possibleAnswers: ["A. The <body> section",
					"B. The <footer> section ",
							"C. The <head> section",
									"D. Both the <head> section and the <body> section are correct"],
								flags : [false, false, false, true],
								answer : "D. Both the <head> section and the <body> section are correct"
										};
										var q3 = {
										question : 'How do you write "Hello World" in an alert box?',
										possibleAnswers : ['A. msg("Hello World");',
													'B. alert("Hello World");',
													'C. alertBox("Hello World");',
													'D. msgBox("Hello World");'],
										flags : [false, true, false, false],
										answer : 'B. alert("Hello World");'
										};
										var q4 = {
										question : 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
										possibleAnswers : ['A. if (i != 5)',
													'B. if i =! 5 then',
													'C. if (i <> 5)',
													'D. if i <> 5'],
										flags : [true, false, false, false],
										answer : 'A. if (i != 5)'
										};
										var q5 = {
										question : 'What is the correct way to write a JavaScript array?',
										possibleAnswers : ['A. var colors = "red", "green", "blue"',
													'B. var colors = ["red", "green", "blue"]',
													'C. var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
													'D. var colors = (1:"red", 2:"green", 3:"blue")'],
										flags : [false, true, false, false],
										answer : 'B. var colors = ["red", "green", "blue"]',
										};
										var q6 = {
										question : 'How does a FOR loop start?',
										possibleAnswers : ['A. for (i = 0; i <= 5; i++)',
													'B. for i = 1 to 5',
													'C. for (i <= 5; i++)',
													'D. for (i = 0; i <= 5)'],
										flags : [true, false, false, false],
										answer : 'A. for (i = 0; i <= 5; i++)'
										};
										var q7 = {
										question : 'How can you add a comment in a JavaScript?',
										possibleAnswers : ['A. ??This is a comment',
					'B. <!--This is a comment-->',
					'C. //This is a comment',
					'D. <comment>'],
					flags : [false, false, true, false],
					answer : 'C. //This is a comment'
					};
					var q8 = {
					question : 'Which event occurs when the user clicks on an HTML element?',
					possibleAnswers : ['A. onmouseover',
					'B. onclick',
					'C. onchange',
					'D. onmouseclick'],
					flags : [false, true, false, false],
					answer : 'B. onclick'
					};
					var q9 = {
					question : 'How do you declare a JavaScript variable?',
					possibleAnswers : ['A. v carName;',
					'B. <v> = carName;',
					'C. variable carName;',
					'D. var carName;'],
					flags : [false, false, false, true],
					answer : 'D. var carName;'
					};
					var q10 = {
					question : 'Which operator is used to assign a value to a variable?',
					possibleAnswers : ['A. =',
					'B. X',
					'C. -',
					'D. *'],
					flags : [true, false, false, false],
					answer : 'A. ='
					}
					var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
					function loadQuestion(questionSelection) {
					console.log(questionSelection);
					countdownTimer.reset();
					$(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
					$("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
					$("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
					$("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
					$("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
					}
					
					function setup() {
					index = 0;
					$('.question').append('<button id="startButton">Start</button>');
					$('#startButton').on('click', function() {
					$(this).hide();
					countdownTimer.start();
					loadQuestion(index);
					});
					}
					function getAnswer() {
					//  nextQuestion();
					$('.answerchoice').on('click', function() {
					console.log('alert', index);
					index++;
					console.log('click', index);
					$(".question").text('');
					$("#buttonA").text('');
					$("#buttonB").text('');
					$("#buttonC").text('');
					$("#buttonD").text('');
					loadQuestion();
					})
					}
					function answerCorrect() {
					correct++;
					alert("Correct!");
					console.log("correct");
					}
					function answerWrong() {
					wrong++;
					alert("Incorrect!");
					console.log("wrong");
					}
					function showScore() {
					$('.question').empty();
					$('.question').append("<h2><p>" + correct + " correct</p></h2>");
					$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
					countdownTimer.stop();
					$('.timer').empty();
					}
					
					
					setup();
					$('.answerchoice').on('click', function() {
					console.log($(this));
					if(this.id == 'buttonA') {
					var answerChosen = 'A';
					} else if(this.id == 'buttonB') {
					answerChosen = 'B';
					} else if (this.id == 'buttonC') {
					answerChosen = 'C';
					} else if (this.id == 'buttonD') {
					answerChosen = 'D';
					}
					if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
					answerCorrect();
					} else if (answerChosen == 'A') {
					answerWrong();
					}
					if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
					answerCorrect();
					} else if (answerChosen == 'B') {
					answerWrong();
					}
					if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
					answerCorrect();
					} else if (answerChosen == 'C') {
					answerWrong();
					}
					if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
					answerCorrect();
					} else if (answerChosen == 'D') {
					answerWrong();
					}
					$(".question").text('');
					$("#buttonA").text('');
					$("#buttonB").text('');
					$("#buttonC").text('');
					$("#buttonD").text('');
					index++;
					if (index < questionArray.length) {
					loadQuestion(index);
					} else {
					$(".answerchoice").hide();
					showScore();
					}
					});
					});