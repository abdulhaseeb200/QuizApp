interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}

const quizQuestions: QuizQuestion[] = [
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

const question_ele = document.querySelector("#question") as HTMLHeadingElement;
const radioInputContainer = document.querySelector(
    "#radio-inputs-container"
) as HTMLDivElement;
const nextBtn = document.querySelector("#next_btn") as HTMLButtonElement;
const restartBtn = document.querySelector("#restart_btn") as HTMLButtonElement;
const quiz_container = document.querySelector(
    "#quiz_container"
) as HTMLDivElement;
const result_container = document.querySelector(
    "#result_container"
) as HTMLDivElement;
const resultMessage = document.querySelector("#result_message") as HTMLHeadingElement;

let currentInd: number = 0;
let rightAnswers: number = 0;
let wrongAnswers: number = 0;

renderQuizToHTML();

function renderQuizToHTML() {
    radioInputContainer.innerHTML = "";
    if (currentInd === quizQuestions.length) {
        quiz_container.style.display = "none";
        result_container.style.display = "block";
        resultMessage.innerText = rightAnswers > wrongAnswers ? "You Win" : "You Lose";
        result_container.innerHTML += `<h2 class="text-2xl">Right Answers: ${rightAnswers}</h2>`;
        result_container.innerHTML += `<h2 class="text-2xl">Wrong Answers: ${wrongAnswers}</h2>`;
    } else {
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
    const selected = document.querySelector(
        `input[name="question-${currentInd}"]:checked`
    ) as HTMLInputElement;
    if (selected) {
        if (selected.value === quizQuestions[currentInd].correctAnswer) {
            rightAnswers++;
        } else {
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
function restartBtun(){
  currentInd = 0;
  rightAnswers = 0;
  wrongAnswers = 0;
  quiz_container.style.display = "block";
  result_container.style.display = "none";
  renderQuizToHTML();
  console.log(restartBtn);
};
