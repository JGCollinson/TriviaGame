var clockRunning = false;
var intervalId;
var stopwatch = {
	time: 100,
	start: function () {
		if (!clockRunning) {
			intervalId = setInterval(stopwatch.count, 1000);
			clockRunning = true;
		}
	},
	count: function () {
			stopwatch.time = stopwatch.time - 1;
			$("#stopwatch").text(stopwatch.time);
		if (stopwatch.time == 0) {
			$('.jumbotron').hide();
			$("#result").html('You correctly answered ' + correctAnswers + " out of " + currentquestion + " questions! ").hide();
			clearInterval(intervalId);
			clockRunning = false;
			$('#game-over').append("Game Over");
		}
	}
};
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
	$('#first').html('<div class="radio"><label><input type="radio" name="option" value="1">' + questions_answers[currentquestion].answers[0] + '</label></div>');
	$('#second').html('<div class="radio"><label><input type="radio" name="option" value="2">' + questions_answers[currentquestion].answers[1] + '</label></div>');
	$('#third').html('<div class="radio"><label><input type="radio" name="option" value="3">' + questions_answers[currentquestion].answers[2] + '</label></div>');
	$('#fourth').html('<div class="radio"><label><input type="radio" name="option" value="4">' + questions_answers[currentquestion].answers[3] + '</label></div>');
};

function checkCorrect() {

	if ($('input[name=option]:checked').val() == questions_answers[currentquestion].answer) {
		correctAnswers++;
	}
};

$(document).ready(function () {
	$('.jumbotron').hide();
	$('#time-remain').hide();
	$('#start').click(function () {
		$('.jumbotron').show();
		$('#time-remain').show();
		$(this).hide();
		$('#time-intro').hide();
		stopwatch.start();
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
					$('#result');
					clearInterval(intervalId);
					clockRunning = false;
				});
			};
		};
	});
});
<<<<<<< HEAD

var clockRunning = false;
var intervalId;
//  Our stopwatch object.
var stopwatch = {
	time: 100,
	start: function () {
		if (!clockRunning) {
			intervalId = setInterval(stopwatch.count, 1000);
			clockRunning = true;
		}
	},


	count: function () {
		stopwatch.time = stopwatch.time - 1;
		$("#stopwatch").text(stopwatch.time);
		if (stopwatch.time < 25) {
			$('#stopwatch').css('color', 'red');
		}

		if (stopwatch.time == 0) {
			$('.jumbotron').hide();
			$("#result").html('You correctly answered ' + correctAnswers + " out of " + currentquestion + " questions! ").hide();
			clearInterval(intervalId);
			clockRunning = false;
			$('#game-over').append("Game Over");
		}
	}
};
=======
>>>>>>> gh-pages
