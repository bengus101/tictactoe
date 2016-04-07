var question = {
	question: "What is the smallest state in the United States?",
	answers: ["Rhode Island", "Hawaii", "Connecticut", "Delaware"],
	correctAnswer: "Rhode Island"
};

var question1 = {
	question: "After the President& Vice President, who is next in the line of succession to become the President of the United States?",
	answers:["Majority Whip", "Senate Majority Leader", "Speaker of the House", "Secretary of Defense"],
	correctAnswer: "Speaker of the House"
};

var question2 = {
	question: "What year was the first Superbowl played?",
	answers: ["1970", "1960", "1967", "1963"],
	correctAnswer: "1967",
};

var question3 = {
	question: "What language is spoken in Iran?",
	answers: ["Arabic", "Swahili", "Pashtun", "Farsi"],
	correctAnswer: "Farsi",
};

var question4 = {
	question: "Which Looney Tunes character should've taken that left turn in Albuquerque?",
	answers: ["Elmer Fudd", "Foghorn Leghorn", "Bugs Bunny", "Sylvester"],
	correctAnswer: "Bugs Bunny",
};

var question5 = {
	question: "How many US states border the Gulf of Mexico?",
	answers: ["3", "5", "4", "6"],
	correctAnswer: "5",
};

var question6 = {
	question: "What's the ballet term for a 360 degree spin on one foot?",
	answers: ["Pirouette", "Lutz", "Revolution", "Roundabout"],
	correctAnswer: "Pirouette",
};

var question7 = {
	question: "What's the name of the actor who portrays John Watson on the popular BBC series 'Sherlock'",
	answers: ["Stuart Dickinson", "Martin Freeman", "Benedict Cumberbatch", "Mark Strong"],
	correctAnswer: "Martin Freeman",
};

var question8 = {
	question: "How many players are in a rugby scrum?",
	answers: ["20", "16", "14", "12"],
	correctAnswer: "16",
};

var question9 = {
	question: "What is the name of the host of the popular Food Network show Chopped?",
	answers: ["Ted Allen", "Amanda Freitag", "Bobby Flay", "Geoffrey Zakarian"],
	correctAnswer: "Ted Allen",
};

var question10 = {
	question: "Which two countries were the signatories of the Sykes-Picot Agreement?",
	answers: ["Israel & Egypt", "United States & Mexico", "France & Great Britian", "Germany & Russia"],
	correctAnswer: "France & Great Britian",
};

var question11= {
	question: "What is the symbol for Potassium on the Periodic Table?",
	answers: ["Po", "K", "Na", "P"],
	correctAnswer: "K",
};

var question12 = {
	question: "Black activist Steven Biko died in which country in the 1970s?",
	answers: ["United States", "Canada", "South Africa", "Namibia"],
	correctAnswer: "South Africa",
};

var question13 = {
	question: "On the popular TV show, The Simpsons, what is Homer's middle name?",
	answers: ["Francis", "Bernard", "Roger", "Jay"],
	correctAnswer: "Jay",
};

var question14 = {
	question: "What liquor was Vincet Van Gogh purportedly drinking when he cut off his ear?",
	answers: ["Vodka", "Absinthe", "Schnapps", "Gin"],
	correctAnswer: "Absinthe",
};

var question15 = {
	question: "What was the name of the South African President that was succeeded by Nelson Mandela?",
	answers: ["Bakkies Botha", "Daniel Francois Malan", "F.W. de Klerk", "Jan Serfontain"],
	correctAnswer: "F.W. de Klerk",
};

var question16 = {
	question: "Which Israeli Prime Minister was assassinated in 1995?",
	answers: ["Benjamin Netanyahu", "Golda Meir", "Ehud Olmert", "Yitzhak Rabin"],
	correctAnswer: "Yitzhak Rabin",
};

var question17 = {
	question: "The Brown Recluse spider is known for having the silhouette of what on its back?",
	answers: ["A violin", "A mask", "An hourglass", "A six-pointed star"],
	correctAnswer: "A violin",
};

var question18 = {
	question: "What is the national bird of India?",
	answers: ["Dove", "Crane", "Peacock", "Sparrow"],
	correctAnswer: "Peacock",
};

var question19 = {
	question: "WHich country, per capita, consumes the most sugar in the world?",
	answers: ["United States", "Israel", "Belize", "Switzerland"],
	correctAnswer: "Israel",
};

var question20 = {
	question: "According to current British historians, which was the deadliest & most effective enemy commander the British Army ever encountered?",
	answers: ["Joan of Arc", "Adolf Hitler", "George Washington", "Erich von Falkenhayn"],
	correctAnswer:"George Washington",
};

var questionsArray = [question, question1, question2, question3, question4, question5, question6, question7, question8, question9,
						question10, question11, question12, question13, question14, question15, question16, question17, question18,
						question19, question20];

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

var rndNum = getRandomInt(0, questionsArray.length -1);
var prevNum;
var rndQuestion = questionsArray[rndNum];

questionsArray.splice(rndNum, 1);

$('#question-row').text(rndQuestion.question);

$('#answer-cell1').text(rndQuestion.answers[0]);
$('#answer-cell2').text(rndQuestion.answers[1]);
$('#answer-cell3').text(rndQuestion.answers[2]);
$('#answer-cell4').text(rndQuestion.answers[3]);

$('#answer-cell1').click(function(event) {
	var userAnswer = $(this).text()
	if (userAnswer === rndQuestion.correctAnswer) {
		$('#modal video source').attr('src', 'Good-Answer.webm');
		$('#modal video').load();
		$('#modal video')[0].play();
	} else {
		$('#modal video source').attr('src', 'Wrong-Answer.webm');
		$('#modal video').load();
		$('#modal video')[0].play();
	};
});

$('#answer-cell2').click(function(event) {
var userAnswer = $(this).text()
	if (userAnswer === rndQuestion.correctAnswer) {
		$('#modal video source').attr('src', 'Good-Answer.webm');
		$('#modal video').load();
		$('#modal video')[0].play();
	} else {
		$('#modal video source').attr('src', 'Wrong-Answer.webm');
		$('#modal video').load();
		$('#modal video')[0].play();
	};
});

$('#answer-cell3').click(function(event) {
var userAnswer = $(this).text()
	if (userAnswer === rndQuestion.correctAnswer) {
		$('#modal video source').attr('src', 'Good-Answer.webm');
		$('#modal video').load();
		$('#modal video')[0].play();
	} else {
		$('#modal video source').attr('src', 'Wrong-Answer.webm');
		$('#modal video').load();
		$('#modal video')[0].play();
	};
});

$('#answer-cell4').click(function(event) {
var userAnswer = $(this).text()
	if (userAnswer === rndQuestion.correctAnswer) {
		$('#modal video source').attr('src', 'Good-Answer.webm');
		$('#modal video').load();
		$('#modal video')[0].play();
	} else {
		$('#modal video source').attr('src', 'Wrong-Answer.webm');
		$('#modal video').load();
		$('#modal video')[0].play();
	};
});

function getNewQuestion() {
	prevNum = rndNum;
	rndNum = getRandomInt(0, questionsArray.length -1);
	compareQuestion();
	rndQuestion = questionsArray[rndNum];
	questionsArray.splice(rndNum, 1);
	$('#question-row').text(rndQuestion.question);
	$('#answer-cell1').text(rndQuestion.answers[0]);
	$('#answer-cell2').text(rndQuestion.answers[1]);
	$('#answer-cell3').text(rndQuestion.answers[2]);
	$('#answer-cell4').text(rndQuestion.answers[3]);
};

function compareQuestion() {
	if (prevNum === rndNum) {
		rndNum = getRandomInt(0, questionsArray.length - 1);
		compareQuestion();
	}
};

$('#modal').dialog({
	autoOpen: false,
	resizable: false,
	width: 'auto',
	height: 'auto',
	position: {my: 'center top', at: 'left top', of: window},
	modal: true,
	buttons: {
		Next: function() {
			$(this).dialog("close");
			document.getElementById('Answer-video').pause();
			getNewQuestion();
		}
	}
})
$("#answer-cell1").click(function(event) {
	$('#modal').dialog('open');
	document.getElementById('Answer-video').play();
});

$("#answer-cell2").click(function(event) {
	$('#modal').dialog('open');
});

$("#answer-cell3").click(function(event) {
	$('#modal').dialog('open');
});

$("#answer-cell4").click(function(event) {
	$('#modal').dialog('open');
});
