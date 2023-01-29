import React from "react";
import Head from "./Head.js";
import Main from "./Main.js";
import data from "../data.js";

export default function App(){
    const cards = data.map((item) => {
        return(
            <Main id={item.id}
                  {...item} />
        )
    })
    return(
        <div className="container">
            <Head />
            <div className="angebote">
                {cards}
                {cards}
            </div>
        </div>
    )
}