import { useState } from 'react'

const QuizComponent = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer)
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1)
    }
  }

  const nextQuestion = () => {
    setSelectedAnswer(null)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      onComplete()
    }
  }

  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">
        Question {currentQuestion + 1} of {questions.length}
      </h3>
      <p className="mb-4">{questions[currentQuestion].question}</p>
      
      <div className="space-y-2">
        {questions[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer)}
            className={`w-full text-left p-3 rounded-lg ${
              selectedAnswer === answer
                ? answer === questions[currentQuestion].correctAnswer
                  ? 'bg-green-100'
                  : 'bg-red-100'
                : 'bg-surface hover:bg-surface/50'
            }`}
          >
            {answer}
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p>Score: {score}/{questions.length}</p>
        <button
          onClick={nextQuestion}
          className="btn-primary"
          disabled={!selectedAnswer}
        >
          {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  )
}

export default QuizComponent
