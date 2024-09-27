const questions = [
    { question: "Who is the main character in Cars", answer: "Lightnig MCQueen" },
    { question: "What is the name of the small town where Lightning McQueen ends up after getting lost?", answer: "Radiator springs" },
    { question: "When was the Cars movie made?", answer: "2006" },
    { question: "Who is MCQeen's best friend?", answer: "Mater" },
    { question: "what kind of car is MCQueen?", answer: "nascar" },
    { question: "What route did MCQueen get lost on?", answer: "Route 66" },
    { question: "what type of car is Mater?", answer: "Tow truck" },
    { question: "Who won the Piston Cup in 1951, 1952, and 1953?", answer: "Doc Hudson" },
    { question: "What is mMater really good at?", answer: "driving backwards" },
    { question: "what is the name of MCQueens truck?", answer: "Mack" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
    } else {
        questionText.textContent = "Quiz complete!";
        submitBtn.disabled = true;
        answerInput.disabled = true;
    }
    scoreDisplay.textContent = `Score: ${score}/${questions.length}`;
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
    }

    currentQuestionIndex++;
    answerInput.value = "";
    loadQuestion();
}

submitBtn.addEventListener("click", checkAnswer);

loadQuestion();