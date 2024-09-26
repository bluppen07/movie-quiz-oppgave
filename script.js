const questions = [
    { question: "test", answer: "test" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" }
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