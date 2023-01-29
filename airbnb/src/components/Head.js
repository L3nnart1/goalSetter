import React from "react";
import Logo from "../images/airbnb 1.svg";
import Photos from "../images/Group 77.png";

export default function Head(){
    return(
        <div>
            <div className="head--logo">
                <img src={Logo} alt=""></img>
            </div>
            <img src={Photos} alt="" className="head--photos"></img>
            <h1 className="head--title">Online Expieriences</h1>
            <h2 className="head--title-desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
        </div>
    )
}