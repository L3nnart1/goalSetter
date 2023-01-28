import React from "react"
import QuizBlock from "./components/QuizBlock"

export default function App(){
  return(
    <main>
      <h1 className="title">Quiz</h1>
      <div className="blob1"></div>
      <QuizBlock />
      <div className="blob2"></div>
    </main>
  )
}