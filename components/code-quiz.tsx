"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "@/components/section-heading"
import { CheckCircle, XCircle, Timer, Award, Code, RefreshCw, ChevronRight } from "lucide-react"

interface Question {
  id: number
  question: string
  code?: string
  options: string[]
  correctAnswer: number
  explanation: string
  language: "javascript" | "typescript" | "python" | "react" | "html" | "css" | "node" | "mongodb" | "sql" | "git"
}

export default function CodeQuiz() {
  const [questions] = useState<Question[]>([
    {
      id: 1,
      question: "What will be the output of this JavaScript code?",
      code: `const arr = [1, 2, 3, 4, 5];\nconst result = arr.filter(num => num > 2);\nconsole.log(result);`,
      options: ["[1, 2]", "[3, 4, 5]", "[1, 2, 3, 4, 5]", "Error"],
      correctAnswer: 1,
      explanation:
        "The filter method creates a new array with elements that pass the test. In this case, only numbers greater than 2 (3, 4, 5) will be included.",
      language: "javascript",
    },
    {
      id: 2,
      question: "What does the following React hook do?",
      code: `const [count, setCount] = useState(0);`,
      options: [
        "Creates a ref",
        "Creates a state variable with initial value 0",
        "Creates a context",
        "Creates an effect",
      ],
      correctAnswer: 1,
      explanation:
        "useState is a React Hook that lets you add a state variable to your component. It returns an array with the current state value and a function to update it.",
      language: "react",
    },
    {
      id: 3,
      question: "What is the correct way to create a function in TypeScript with typed parameters?",
      code: `function add(a: number, b: number): number {\n  return a + b;\n}`,
      options: [
        "The function is missing type annotations",
        "The function should use 'function*' for typed functions",
        "This is correct TypeScript syntax",
        "The return type should be 'Number' not 'number'",
      ],
      correctAnswer: 2,
      explanation:
        "This is the correct way to define a TypeScript function with typed parameters and return type. Parameters 'a' and 'b' are typed as numbers, and the function returns a number.",
      language: "typescript",
    },
    {
      id: 4,
      question: "What will this Python code return?",
      code: `def func(x, y=[]):\n  y.append(x)\n  return y\n\nprint(func(1))\nprint(func(2))`,
      options: ["[1], [2]", "[1], [1, 2]", "[1, 2], [1, 2]", "Error"],
      correctAnswer: 1,
      explanation:
        "In Python, default arguments are evaluated once when the function is defined. The first call returns [1], but since the default list is now modified, the second call returns [1, 2].",
      language: "python",
    },
    {
      id: 5,
      question: "What CSS property would you use to create a flexible box layout?",
      options: ["flex", "grid", "block", "float"],
      correctAnswer: 0,
      explanation:
        "The 'display: flex' property creates a flex container, enabling a flex context for all its direct children. It's part of the Flexbox layout module.",
      language: "css",
    },
    {
      id: 6,
      question: "What is the output of this Node.js code?",
      code: `const promise1 = Promise.resolve(3);\nconst promise2 = 42;\nconst promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));\n\nPromise.all([promise1, promise2, promise3]).then((values) => {\n  console.log(values);\n});`,
      options: ["[3, 42, 'foo']", "['foo', 42, 3]", "Error", "undefined"],
      correctAnswer: 0,
      explanation:
        "Promise.all() takes an array of promises and returns a new promise that resolves when all input promises have resolved. The resolved values are returned in the same order as the promises in the input array.",
      language: "node",
    },
    {
      id: 7,
      question:
        "Which MongoDB query would find documents where the 'age' field is greater than 25 and the 'status' is 'active'?",
      code: `db.collection.find(?)`,
      options: [
        "{ age: {$gt: 25}, status: 'active' }",
        "{ $and: [{age: 25}, {status: 'active'}] }",
        "{ age > 25, status: 'active' }",
        "{ $where: 'this.age > 25 && this.status === \"active\"' }",
      ],
      correctAnswer: 0,
      explanation:
        "The correct syntax uses the $gt operator for 'greater than' comparison and combines conditions with a comma, which implicitly creates an AND condition.",
      language: "mongodb",
    },
    {
      id: 8,
      question: "What will this SQL query return?",
      code: `SELECT department, COUNT(*) as employee_count\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 10\nORDER BY employee_count DESC;`,
      options: [
        "All departments with their employee counts",
        "Departments with more than 10 employees, ordered by employee count in descending order",
        "The top 10 departments by employee count",
        "Error - invalid SQL syntax",
      ],
      correctAnswer: 1,
      explanation:
        "This query groups employees by department, counts them, filters to only include departments with more than 10 employees (using HAVING), and sorts the results by employee count in descending order.",
      language: "sql",
    },
    {
      id: 9,
      question: "What does the following Git command do?",
      code: `git rebase -i HEAD~3`,
      options: [
        "Merges the last 3 commits",
        "Opens an interactive rebase for the last 3 commits",
        "Reverts the last 3 commits",
        "Shows the diff for the last 3 commits",
      ],
      correctAnswer: 1,
      explanation:
        "The 'git rebase -i HEAD~3' command starts an interactive rebase session for the last 3 commits, allowing you to reorder, edit, squash, or drop commits before applying them.",
      language: "git",
    },
    {
      id: 10,
      question: "What is the correct way to create a Next.js API route?",
      code: `// pages/api/hello.js\n\nexport default function handler(req, res) {\n  res.status(200).json({ name: 'John Doe' })\n}`,
      options: [
        "This is correct",
        "The function should be named 'apiHandler' not 'handler'",
        "The function should use 'app.get()' instead of 'export default'",
        "The response should use 'send()' not 'json()'",
      ],
      correctAnswer: 0,
      explanation:
        "This is the correct way to create an API route in Next.js. Files in the pages/api directory are treated as API endpoints instead of pages. The handler function receives the request and response objects and can return JSON responses.",
      language: "javascript",
    },
  ])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(20)
  const [timerActive, setTimerActive] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Handle mounting state to avoid SSR issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timerActive && timeLeft === 0) {
      handleNextQuestion()
    }
    return () => clearTimeout(timer)
  }, [timerActive, timeLeft])

  const startGame = () => {
    setGameStarted(true)
    setGameFinished(false)
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setTimeLeft(20)
    setTimerActive(true)
  }

  const resetGame = () => {
    setGameStarted(false)
    setGameFinished(false)
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setTimeLeft(20)
    setTimerActive(false)
  }

  const handleOptionSelect = (optionIndex: number) => {
    if (showAnswer) return

    setSelectedOption(optionIndex)
    setShowAnswer(true)
    setTimerActive(false)

    if (optionIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedOption(null)
      setShowAnswer(false)
      setTimeLeft(20)
      setTimerActive(true)
    } else {
      setGameFinished(true)
      setTimerActive(false)
    }
  }

  const getLanguageBadgeColor = (language: string) => {
    switch (language) {
      case "javascript":
        return "bg-yellow-500 text-black"
      case "typescript":
        return "bg-blue-500 text-white"
      case "python":
        return "bg-green-600 text-white"
      case "react":
        return "bg-cyan-500 text-black"
      case "html":
        return "bg-orange-500 text-white"
      case "css":
        return "bg-indigo-500 text-white"
      case "node":
        return "bg-green-500 text-white"
      case "mongodb":
        return "bg-green-700 text-white"
      case "sql":
        return "bg-blue-700 text-white"
      case "git":
        return "bg-orange-700 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  // If not mounted yet, return a simple placeholder to avoid hydration issues
  if (!isMounted) {
    return (
      <section id="code-quiz" className="py-20">
        <SectionHeading title="Code Challenge" subtitle="Test your coding knowledge" />
        <div className="mt-12">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 min-h-[400px] flex items-center justify-center">
              <CardContent>
                <div className="text-center">Loading code quiz...</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <section id="code-quiz" className="py-20">
      <SectionHeading title="Code Challenge" subtitle="Test your coding knowledge" />

      <div ref={ref} className="mt-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
            {!gameStarted && !gameFinished ? (
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px]">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <Code className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Ready to test your coding knowledge?</h3>
                <p className="text-muted-foreground text-center mb-8">
                  Answer 10 coding questions to see how much you know about JavaScript, TypeScript, React, Python, CSS,
                  Node.js, MongoDB, SQL, and Git.
                </p>
                <Button onClick={startGame} size="lg" className="gap-2">
                  Start Quiz <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            ) : gameFinished ? (
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[400px]">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">Quiz Completed!</h3>
                <p className="text-muted-foreground text-center mb-6">
                  You scored {score} out of {questions.length}
                </p>

                <div className="w-full max-w-md mb-8">
                  <Progress value={(score / questions.length) * 100} className="h-3" />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button onClick={resetGame} variant="outline" className="gap-2">
                    <RefreshCw className="h-4 w-4" /> Play Again
                  </Button>
                  <Button
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="gap-2"
                  >
                    Contact Me <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            ) : (
              <div>
                <CardHeader className="p-6 pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="text-xs">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </Badge>
                    <Badge className={`${getLanguageBadgeColor(currentQuestion.language)} text-xs`}>
                      {currentQuestion.language.charAt(0).toUpperCase() + currentQuestion.language.slice(1)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
                </CardHeader>

                <CardContent className="p-6">
                  {currentQuestion.code && (
                    <div className="bg-secondary/50 p-4 rounded-md mb-6 overflow-x-auto">
                      <pre className="text-sm font-mono whitespace-pre-wrap">{currentQuestion.code}</pre>
                    </div>
                  )}

                  <div className="space-y-3 mt-4">
                    {currentQuestion.options.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => handleOptionSelect(index)}
                        className={`p-4 border-2 rounded-md cursor-pointer flex items-center gap-3 transition-all duration-200 hover:bg-secondary ${
                          showAnswer
                            ? index === currentQuestion.correctAnswer
                              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                              : selectedOption === index
                                ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                : "border-muted bg-background"
                            : "border-muted hover:border-muted-foreground"
                        }`}
                      >
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          {showAnswer && index === currentQuestion.correctAnswer ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : showAnswer && selectedOption === index ? (
                            <XCircle className="h-5 w-5 text-red-500" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center">
                              {String.fromCharCode(65 + index)}
                            </div>
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>

                  {showAnswer && (
                    <div className="mt-6 p-4 bg-secondary/50 rounded-md">
                      <h4 className="font-semibold mb-1">Explanation:</h4>
                      <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4 text-muted-foreground" />
                    <Progress value={(timeLeft / 20) * 100} className="w-24 h-2" />
                    <span className="text-sm text-muted-foreground">{timeLeft}s</span>
                  </div>

                  {showAnswer ? (
                    <Button onClick={handleNextQuestion}>
                      {currentQuestionIndex < questions.length - 1 ? "Next Question" : "See Results"}
                    </Button>
                  ) : (
                    <Button variant="outline" onClick={() => setShowAnswer(true)}>
                      Skip
                    </Button>
                  )}
                </CardFooter>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
