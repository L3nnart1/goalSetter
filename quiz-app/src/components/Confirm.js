import React from "react";

export default function Confirm(props){
    return(
        <div>
            <div className="background-blass">
            </div>
            <div className="confirm">
                <h1 className="confirm-title">Wenn du fortfährst gehen deine momentanen Fragen verloren!</h1>
                <button className="confirmBtn btn-green" onClick={props.handleReturn}>back</button>
                <button className="confirmBtn btn-blass" onClick={props.handleContinue}>continue</button>
            </div>
        </div>
    )
}