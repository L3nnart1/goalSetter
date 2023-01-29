import React from "react";
import star from "../images/Star 1.svg";
import Person from "../images/katie-zaferes.png";

export default function Main(props){
    return(
        <div className="main">
            {props.openSpots != null && <div className="main--status">{props.openSpots === 0 ? "SOLD OUT" : "ONLINE"}</div>}
            <img src={Person} alt="" className="main--image"></img>
            <div className="main--first-info">
                <img src={star} alt=""></img>
                <h6>{props.stats.rating}</h6>
                <div className="main--first-info-light">
                <h6>({props.stats.reviewCount})</h6>
                <h6>• {props.location}</h6>
                </div>
            </div>
            <h6 className="main--desc">{props.title}</h6>
            <h6 className="main--price">From ${props.price} <h6 className="main--price-light">/ Person</h6></h6>
        </div>
    )
}