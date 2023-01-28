import React from "react"
import "../style.css"
import { nanoid } from 'nanoid'

export default function QuizBlock(){
    let [data, setData] = React.useState([]);

    let [fields, setFields] = React.useState(initFields())

    let [submited, setSubmited] = React.useState(false);

    let [restart, setRestart] = React.useState(0);

    React.useEffect(function(){
        fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=base64")
            .then(res => res.json())
            .then(recievedData => setData(recievedData.results))
    },[restart]);

    React.useEffect(function() {
        setFields(initFields());
        console.log("change")
    },[data])

    function initFields(){
        let blocks = []
        data.map(block => {
            let tempField = {wrong:[],
                            true:{text:atob(block.correct_answer),
                            isClicked:false,
                            pos:Math.floor(Math.random()*4),
                            id: nanoid()},
                            question:atob(block.question)}
            for (let i = 0; i < block.incorrect_answers.length; i++) {
                tempField.wrong.push({text:atob(block.incorrect_answers[i]), isClicked:false, id: nanoid()})
            }
            blocks.push(tempField)
        })
        return blocks
    }

    function setFieldElements(){
        let fieldElements = fields.map(field => {
            let tempAnswers = field.wrong.map(quest => 
                                            <button 
                                            className={quest.isClicked ? "answer answerClicked" : "answer"}
                                            onClick={() => setClicked(quest.id)}
                                            id={nanoid()}>
                                            {quest.text}</button>)
            tempAnswers.splice(field.true.pos, 0 ,
                                <button 
                                    className={field.true.isClicked ? "answer answerClicked" : "answer"} 
                                    onClick={() => setClicked(field.true.id)}
                                    id={nanoid()}>
                                    {field.true.text}</button>
                                )
            return(
                <div key={nanoid()} className="field">
                    <h1 key={nanoid()} className="fieldTitle">{field.question}</h1>
                    <div key={nanoid()} className="answers">
                        {tempAnswers}
                    </div>
                    <hr/>
                </div>
            )
        })
        return fieldElements;
    }
    function setClicked(id){
            setFields(prevfields => prevfields.map(field => {
                let includes = false;
                for (let i = 0; i < field.wrong.length; i++) {
                    includes = includes ? true : field.wrong[i].id === id 
                }
                includes = includes ? true : field.true.id === id;
                if(includes){
                    return {
                        ...field,
                        wrong: field.wrong.map(fl => fl.id === id ? {...fl, isClicked:!fl.isClicked} : {...fl, isClicked:false}),
                        true: field.true.id === id ? {...field.true, isClicked : !field.true.isClicked} : {...field.true, isClicked:false}
                    }
                } else{
                    return field
                }
            })
        )
    }
    function checkAnswers(){
        let hasAnswer = false
        const decis = fields.map(field => {
            let includesClick = false
            field.wrong.map(ans => {
                if(!includesClick){
                    includesClick = ans.isClicked ? true : includesClick ? true : false
                }
            })
            includesClick = field.true.isClicked ? true : includesClick ? true : false
            return includesClick;
        })
        hasAnswer = !decis.includes(false);
        return hasAnswer;
    }
    function setFinal(){
        let fieldElements = fields.map(field => {
            let tempAnswers = field.wrong.map(quest => <button className={quest.isClicked ? "answer answerFalse" : "answer answerBlank"}>{quest.text}</button>)
            tempAnswers.splice(field.true.pos, 0,
                                <button 
                                   className={field.true.isClicked ? "answer answerTrue" : "answer answerRight"} >
                                   {field.true.text}</button>
                                )
            return(
                <div key={nanoid()} className="field">
                    <h1 key={nanoid()} className="fieldTitle">{field.question}</h1>
                    <div key={nanoid()} className="answers">
                        {tempAnswers}
                    </div>
                    <hr/>
                </div>
            )
        })
        return fieldElements;
    }
    function handleSubmit(){
        let render = checkAnswers()
        if(render){
            setSubmited(true)
        }
    }
    function initRestart(){
        setSubmited(false)
        setRestart(old => old += 1)
    }

    return(
        <div key={nanoid()}>
            {!submited ? setFieldElements() : setFinal()}
            <button className="submit" onClick={!submited ? handleSubmit : initRestart} >{submited ? "Restart" : "Submit"}</button>
        </div>
    )
}