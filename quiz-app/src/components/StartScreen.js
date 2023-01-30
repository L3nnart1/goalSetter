import React from "react";

export default function StartSreen(props){
    const [selection, setSelection] = React.useState("Allgemein Wissen");

    React.useEffect(function(){
        let cate = 27
        switch(selection){
            case "Allgemein Wissen":
                cate = 9;
                break;
            case "Film":
                cate = 11;
                break;
            case "Bücher":
                cate = 10;
                break;
            case "ViedeoSpiele":
                cate = 15;
                break;
            case "Wissenschaft und Natur":
                cate = 17;
                break;
            case "Sport":
                cate = 21;
                break;
            case "Geographie":
                cate = 22;
                break;
            case "Geschichte":
                cate = 23;
                break;
            case "Politik":
                cate = 24;
                break;
            case "Tiere":
                cate = 27;
                break;
            case "Fahrzeuge":
                cate = 28;
                break;
            case "Alle":
                cate = 99;
                break;
        }
        props.handleSelection(cate)
    },[selection])

    function handleChange(e){
        props.handleType(e.target.value)
    }

    return(
        <div className="start">
            <h1 className="startTitle">Quiz-App</h1>
            <div className="custom-select">
                <select className="selection" value={selection} onChange={(e) => setSelection(e.target.value)}>
                    <option>Allgemein Wissen</option>
                    <option>Film</option>
                    <option>Bücher</option>
                    <option>ViedeoSpiele</option>
                    <option>Wissenschaft und Natur</option>
                    <option>Sport</option>
                    <option>Geographie</option>
                    <option>Geschichte</option>
                    <option>Politik</option>
                    <option>Tiere</option>
                    <option>Fahrzeuge</option>
                    <option>Alle</option>
                </select>
                <span className="custom-arrow"></span>
            </div>
            <div className="radios">
                <input type="radio" name="type" id="multiple" value="multiple" onChange={handleChange} className="radio__input"></input>
                <label for="multiple" className="label">multiple Choice</label>
                <input type="radio" name="type" id="boolean" value="boolean" onChange={handleChange} className="radio__input"></input>
                <label for="boolean" className="label">Wahr / Falsch</label>
            </div>
            <button className="startBtn" onClick={props.handleClick}>Start</button>
        </div>
    )
}