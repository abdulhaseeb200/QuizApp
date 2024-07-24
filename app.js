"use strict";
const quizQuestions = [
    {
        question: "What is the correct way to define a variable in TypeScript?",
        options: [
            "var variableName: type",
            "let variableName: type",
            "const variableName: type",
            "All of the above",
        ],
        correctAnswer: "All of the above",
    },
    {
        question: "Which type is not a valid TypeScript type?",
        options: ["string", "number", "object", "element"],
        correctAnswer: "element",
    },
    {
        question: "How do you define an interface in TypeScript?",
        options: [
            "interface InterfaceName {}",
            "class InterfaceName {}",
            "type InterfaceName = {}",
            "None of the above",
        ],
        correctAnswer: "interface InterfaceName {}",
    },
    {
        question: "How do you specify an optional property in an interface?",
        options: [
            "propertyName?: type",
            "propertyName: type?",
            "propertyName! : type",
            "propertyName: type!",
        ],
        correctAnswer: "propertyName?: type",
    },
    {
        question: "Which of the following is used to define a constant in TypeScript?",
        options: ["let", "var", "const", "static"],
        correctAnswer: "const",
    },
];
const question_ele = document.querySelector("#question");
const radioInputContainer = document.querySelector("#radio-inputs-container");
const nextBtn = document.querySelector("#next_btn");
const restartBtn = document.querySelector("#restart_btn");
const quiz_container = document.querySelector("#quiz_container");
const result_container = document.querySelector("#result_container");
const resultMessage = document.querySelector("#result_message");
let currentInd = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
renderQuizToHTML();
function renderQuizToHTML() {
    radioInputContainer.innerHTML = "";
    if (currentInd === quizQuestions.length) {
        quiz_container.style.display = "none";
        result_container.style.display = "block";
        resultMessage.innerText = rightAnswers > wrongAnswers ? "You Win" : "You Lose";
        result_container.innerHTML += `<h2 class="text-2xl">Right Answers: ${rightAnswers}</h2>`;
        result_container.innerHTML += `<h2 class="text-2xl">Wrong Answers: ${wrongAnswers}</h2>`;
    }
    else {
        const que = quizQuestions[currentInd];
        question_ele.innerText = `${currentInd + 1}) ${que.question}`;
        que.options.forEach((data) => {
            radioInputContainer.innerHTML += `<label class="my-2">
                <input type="radio" name=${`question-${currentInd}`} value="${data}" />
                <span class="pl-2">${data}</span>
            </label>`;
        });
    }
    if (currentInd === quizQuestions.length - 1) {
        nextBtn.innerText = "Submit";
    }
}
nextBtn.addEventListener("click", () => {
    const selected = document.querySelector(`input[name="question-${currentInd}"]:checked`);
    if (selected) {
        if (selected.value === quizQuestions[currentInd].correctAnswer) {
            rightAnswers++;
        }
        else {
            wrongAnswers++;
        }
        currentInd++;
        renderQuizToHTML();
    }
});
restartBtn.addEventListener("click", () => {
    currentInd = 0;
    rightAnswers = 0;
    wrongAnswers = 0;
    quiz_container.style.display = "block";
    result_container.style.display = "none";
    renderQuizToHTML();
});
console.log(restartBtn);
function restartBtun() {
    currentInd = 0;
    rightAnswers = 0;
    wrongAnswers = 0;
    quiz_container.style.display = "block";
    result_container.style.display = "none";
    renderQuizToHTML();
    console.log(restartBtn);
}
;
