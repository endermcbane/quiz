$(document).ready(function() {

	var qnum = 0

	var currentquestion = 1

	var correctAnswers = 0

	var questions = [
		{
			number: 1,
			image: "images/q1.jpg",
			answer: "Vincent van Gogh",
			called: 'Starry Night'
		},

		{
			number: 2,
			image: "images/q2.jpg",
			answer: "Georges Seurat",
			called: 'La Grande Jatte'
		},

		{
			number: 3,
			image: "images/q3.jpg",
			answer: "Claude Monet",
			called: 'Water Lilies'
		},

		{
			number: 4,
			image: "images/q4.jpg",
			answer: "Rembrandt",
			called: 'Militia Company'
		},

		{
			number: 5,
			image: "images/q5.jpg",
			answer: "Edvard Munch",
			called: 'The Scream'
		},

	];

$('#right').hide();
$('#wrong').hide();


function newgame () {
$("#answers").hide();
$("#counter").hide();
$("#correct").hide();
$('#newGame').hide();
qnum = 0;
currentquestion = 1;
correctAnswers = 0;
$("#qcount").text(currentquestion);
$("#correctCount").text(correctAnswers);
console.log(qnum);
console.log(currentquestion);
$('body').css('background','url(images/intro.jpg) no-repeat center center fixed');
$('body').css('background-size','cover');
$(".intro").show();
};


newgame();


 $('input[name=begin]').click(function(e){
	e.preventDefault(e);
	$("#answers").show();
	$("#counter").show();
	$("#correct").show();
	changeImage();
	$(".intro").hide();
});



 $('input[name=choice]').click(function(e){
	e.preventDefault(e);
	var userChoice = $(this).closest('input[name=choice]').val();
	
	if (userChoice === questions[qnum].answer) {
		rightAnswer();
	}

	else{
		wrongAnswer();
	};
});


function changeImage () {
	$('body').css('background','url('+questions[qnum].image+') no-repeat center center fixed');
	$('body').css('background-size','cover');
};


function rightAnswer() {
	$('#right').show();
	$('#artistName').replaceWith('<span id = "artistName">' + questions[qnum].answer + '</span>')
	$('#paintingTitle').replaceWith('<span id = "paintingTitle">' + questions[qnum].called + '</span>')
	correctAnswers++
	$("#correctCount").text(correctAnswers);
	$("#answers").hide();
};


function wrongAnswer() {
	$('#wrong').show();
	$('#artistName1').replaceWith('<span id = "artistName1">' + questions[qnum].answer + '</span>');
	$('#paintingTitle1').replaceWith('<span id = "paintingTitle1">' + questions[qnum].called + '</span>');
	$("#answers").hide();
	
};


$('input[name=continue]').click(function(e){
	e.preventDefault(e);
	if (qnum <= 3) {
		$('#right').hide();
		$('#wrong').hide();
		$("#answers").show();
		qnum++;
		currentquestion++
		$("#qcount").text(currentquestion);
		changeImage();
	}
	else{
		
		$('#right').hide();
		$('#wrong').hide();
		$('#newGame').show();
		$('#finalCount').replaceWith('<span id = "finalCount">' + correctAnswers + '</span>')

	};
});

$('input[name=newGame]').click(function(e){
	e.preventDefault(e);
	newgame();
});


});

/*var userScoring = function() {
				if(userChoice === allQuestions[currentTurn].correctAnswer) {
				userScore += 1;
				console.log(userScore);
				}
			currentTurn += 1;	
	 		console.log(currentTurn);
			};	*/
