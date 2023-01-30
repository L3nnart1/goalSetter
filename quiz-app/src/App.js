import React,{useState} from "react"
import QuizBlock from "./components/QuizBlock"
import StartSreen from "./components/StartScreen";

export default function App(){
  const [screen, setScreen] = useState("start");

  const [selection, setSelecton] = useState("biologie");

  const [type, setType] = useState("multiple");

  function changeSelection(category){
    setSelecton(category);
  }

  function manageScreen(){
    if(screen === "start"){
      setScreen("quiz")
    } else{
      setScreen("start")
    }
  }
  return(
    <main>
      <div className="blob1"></div>
      {screen === "start" ? <StartSreen handleClick={manageScreen} handleSelection={changeSelection} handleType={setType}/> : <QuizBlock handleClick={manageScreen} category={selection} type={type}/>}
      <div className="blob2"></div>
    </main>
  )
}