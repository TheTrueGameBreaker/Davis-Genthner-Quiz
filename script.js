// This is the start of the variables

var gameTimer = 0
var score = 0
var highscore = 0

// This variable in particular is how the timer works
const sleep = async (milloseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milloseconds);
    });
};
document.getElementById('time-left').innerHTML = gameTimer
document.getElementById('currentscore').innerHTML = score
document.getElementById('highestscore').innerHTML = highscore
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container')
const questionElemnt =document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestion, currentQuestionIndex

// This is were the functions are located

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNexQuestion()
})

function startGame() {
    console.log("It begins!")
    gameTimer += 60
    score -= score
    startButton.classList.add('hide')
    shuffledQuestion = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    startTimer()
    setNexQuestion()
}

async function startTimer() {
    while (gameTimer >> 0) {
        await sleep(1000);
        gameTimer -= 1
        console.log(gameTimer);
        document.getElementById('time-left').innerHTML = gameTimer
    }
}

function setNexQuestion() {
    if (gameTimer === 0) {
        startButton.innerText = 'Restart quiz'
        startButton.classList.remove("hide")
        nextButton.classList.add("hide")
        console.log(highscore)
        const playerName = prompt("Please enter Your name: ")
        console.log(playerName)
        console.log(score)
        if ((score - highscore) >= 1) {
            document.getElementById('highestscore').innerHTML = score
            document.getElementById('playername').innerHTML = playerName
            highscore += (score - highscore)
        }
        else {
            console.log("LOL not enough points")
            highscore -= score
            console.log(highscore)
        }
    }
    else {
        resetState()
        showQuestion(shuffledQuestion[currentQuestionIndex])
    }
}

function showQuestion(question) {
    questionElemnt.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText =answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener("click", selectAnswer)
      answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearstatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    }
    else {
        startButton.innerText = 'Restart quiz'
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearstatusClass(element)
    if (correct) {
        element.classList.add('correct')
        score += 1
    }
    else {
        element.classList.add('wrong')
    }
}

function clearstatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// This is the start of the array of questions

const questions = [
    {
        question: "What do you need to write to change font-style in CSS?",
        answers: [
            { text: "font-family", correct: true },
            { text: "font-size", correct: false},
            { text: "font-color", correct: false},
            { text: "That Action is not Possible", correct: false}
        ]
    },
    {
        question: "HTML uses",
        answers: [
            { text: "Tabs", correct: false},
            { text: "Tags", correct: true},
            { text: "Labels", correct: false},
            { text: "Quotes", correct: false}
        ]
    },
    {
        question: "Google Chrome, Mozilla Firefox and Microsoft Edge are all examples of what?",
        answers: [
            { text: "Search engines", correct: false},
            { text: "Websites", correct: false},
            { text: "Web Browsers", correct: true},
            { text: "Text editors", correct: false}
        ]
    },
    {
        question: "CSS stands for?",
        answers: [
            { text: "Code Style Sheet", correct: false},
            { text: "Coding Style Sheet", correct: false},
            { text: "Cascading Sheet Style", correct: false},
            { text: "Cascading Style Sheets", correct: true}
        ]
    },
    {
        question: "What language is used to create the content of a webpage?",
        answers: [
            { text: "HTML", correct: true},
            { text: "CSS", correct: false},
            { text: "Javascript", correct: false},
            { text: "repl.it", correct: false}
        ]
    },
    {
        question: "What language is used to style a webpage?",
        answers: [
            { text: "HTML", correct: false},
            { text: "CSS", correct: true},
            { text: "Javascript", correct: false},
            { text: "repl.it", correct: false}
        ]
    },
    {
        question: "What language is used to add interactivity and effects to a webpage?",
        answers: [
            { text: "HTML", correct: false},
            { text: "CSS", correct: false},
            { text: "Javascript", correct: true},
            { text: "repl.it", correct: false}
        ]
    },
    {
        question: "Which of the following is the correct Javascript format for a comment?",
        answers: [
            { text: "// comment", correct: true},
            { text: "/comment/", correct: false},
            { text: "*/comment/*", correct: false},
            { text: "\\comment", correct: false}
        ]
    },
    {
        question: "Indicates the beginning  and the end of a JavaScript section.",
        answers: [
            { text: "<html> </html>", correct: false},
            { text: "<style> </style>", correct: false},
            { text: "<article> </article>", correct: false},
            { text: "<script> </script>", correct: true}
        ]
    },
    {
        question: "A user-defined name for a memory location whose value can change over time.",
        answers: [
            { text: "variable", correct: true},
            { text: "syntax", correct: false},
            { text: "operator", correct: false},
            { text: "token", correct: false}
        ]
    },
    {
        question: "What character is used for multiplication?",
        answers: [
            { text: "#", correct: false},
            { text: "*", correct: true},
            { text: "X", correct: false},
            { text: "/", correct: false}
        ]
    },
    {
        question: "Which of the following best describes what a function is used for?",
        answers: [
            { text: "they create new variable commands", correct: false},
            { text: "they are used for difficult math formulas", correct: false},
            { text: "they are reusable pieces of code that can be called any time in the program", correct: true},
            { text: "they allow for the use of mathematical operators", correct: false}
        ]
    },
    {
        question: "What surrounds a string?",
        answers: [
            { text: "Quotations", correct: true},
            { text: "Curly Brackets", correct: false},
            { text: "Parenthesis", correct: false},
            { text: "Square Brackets", correct: false}
        ]
    },
    {
        question: "Which keyword do we need to define a function?",
        answers: [
            { text: "function", correct: true},
            { text: "method", correct: false},
            { text: "onclick", correct: false},
            { text: "functionName()", correct: false}
        ]
    },
    {
        question: "What is the purpose of a comment in a piece of computer code?",
        answers: [
            { text: "It tells the user what is happening with the program", correct: false},
            { text: "It is a command that the computer will run", correct: false},
            { text: "It asks the user for an input", correct: false},
            { text: "It is a note for the programmer which the program ignores when it runs", correct: true}
        ]
    }
]