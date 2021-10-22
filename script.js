const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const result = [];
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (correct) {
    result.push(1);
    console.log(result)
  } else {
    result.push(0);
    console.log(result)
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    const total = result.reduce((a, b) => a + b, 0);
    alert(total);
    if (total >= 3) {
      alert("You are a genius!");
    } else {
      alert("You are a loser!");
    }
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }


}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'pregunta 1',
    answers: [
      { text: 'respuesta 1', correct: true },
      { text: 'respuesta 2', correct: false },
      { text: 'respuesta 3', correct: false },
      { text: 'respuesta 4', correct: false }
    ]
  },
  {
    question: 'pregunta 2',
    answers: [
      { text: 'respuesta 1', correct: true },
      { text: 'respuesta 2', correct: false },
      { text: 'respuesta 3', correct: false },
      { text: 'respuesta 4', correct: false }
    ]
  },
  {
    question: 'pregunta 3',
    answers: [
      { text: 'respuesta 1', correct: true },
      { text: 'respuesta 2', correct: false },
      { text: 'respuesta 3', correct: false },
      { text: 'respuesta 4', correct: false }
    ]
  },
  {
    question: 'pregunta 4',
    answers: [
      { text: 'respuesta 1', correct: true },
      { text: 'respuesta 2', correct: false },
      { text: 'respuesta 3', correct: false },
      { text: 'respuesta 4', correct: false }
    ]
  },
  {
    question: 'pregunta 5',
    answers: [
      { text: 'respuesta 1', correct: true },
      { text: 'respuesta 2', correct: false },
      { text: 'respuesta 3', correct: false },
      { text: 'respuesta 4', correct: false }
    ]
  }
]