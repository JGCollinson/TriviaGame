var questions_answers = [{
		question: "What was Han Solo's rank in the Rebel Alliance at the Battle of Hoth?",
		answers: ["Lieutenant", "General", "Admiral", "Captain"],
		answer: 4
	},
	{
		question: "For what celebration did Chewbacca return to Kashyyyk to be with Mallatobuck and Lumpawarump?",
		answers: ["Kashyyyk Day", "Wroshyr Day", "Tarfful Day", "Life Day"],
		answer: 4
	},
	{
		question: 'Who said, "I am not a committie!"?',
		answers: ["C-3PO", "Princess Leia", "Luke Skywalker", "Han Solo"],
		answer: 2
	},
	{
		question: 'To whom was Princess Leia referring when she said, "Lazer Brain"?',
		answers: ["Han Solo", "Chewbacca", "Luke Skywalker", "Lando Calrissian"],
		answer: 1
	},
	{
		question: 'Who said, "He is as clumsy as he is stupid?"',
		answers: ["The Emperor", "Darth Vader", "Captain Needa", "Admiral Ozzel"],
		answer: 2
	},
	{
		question: "What did Yoda say was always in motion when Luke asked him about a vision?",
		answers: ["The Future", "The Force", "The Galaxy", "The Mind"],
		answer: 1
	},

];
var currentquestion = 0;
var correctAnswers = 0;
function setupQuestions() {

	$('#question').text(questions_answers[currentquestion].question);
	$('#a1').html('<div class="radio"><label><input type="radio" name="option" value="1">' + questions_answers[currentquestion].answers[0] + '</label></div>');
	$('#a2').html('<div class="radio"><label><input type="radio" name="option" value="2">' + questions_answers[currentquestion].answers[1] + '</label></div>');
	$('#a3').html('<div class="radio"><label><input type="radio" name="option" value="3">' + questions_answers[currentquestion].answers[2] + '</label></div>');
	$('#a4').html('<div class="radio"><label><input type="radio" name="option" value="4">' + questions_answers[currentquestion].answers[3] + '</label></div>');
};

function checkCorrect() {

	if ($('input[name=option]:checked').val() == questions_answers[currentquestion].answer) {
		correctAnswers++;
	}
};
$(document).ready(function () {
	$('.jumbotron').hide();
	$('#timeLeft').hide();
	$('#start').click(function () {
		$('.jumbotron').show();
		$('#timeLeft').show();
		$(this).hide();
		$('#startMessage').hide();
		timer.start();
	});

	setupQuestions();

	$('#next').click(function () {
		event.preventDefault();
		checkCorrect();
		currentquestion++;

		if (currentquestion < questions_answers.length) {
			setupQuestions();
			if (currentquestion == 5) {
				$('#next').html('Submit');
				$('#next').click(function () {
					$('.jumbotron').hide();
					$("#result").html('You correctly answered ' + correctAnswers + " out of " + currentquestion + " questions! ").show();
					clearInterval(intervalId);
					clockRunning = false;
				});
			};
		};
	});
});
var clockRunning = false;
var intervalId;
var timer = {
	time: 100,
	start: function () {
		if (!clockRunning) {
			intervalId = setInterval(timer.count, 1000);
			clockRunning = true;
		}
	},
	count: function () {
		timer.time = timer.time - 1;
		$("#timer").text(timer.time);
		if (timer.time == 0) {
			$('.jumbotron').hide();
			$("#result").html('You correctly answered ' + correctAnswers + " out of " + currentquestion + " questions! ").hide();
			clearInterval(intervalId);
			clockRunning = false;
			$('#gameOver').append("Game Over");
		}
	}
};
