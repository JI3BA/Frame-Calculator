import React from "react";
import Calculator from "./Calculator/Calculator";
import '../Main/Main.scss'

const Main = () => {
    return(
        <div className="main">
            <div className="main__container wrapper">
                <Calculator/>
            </div>
        </div>
    )
}

export default Main