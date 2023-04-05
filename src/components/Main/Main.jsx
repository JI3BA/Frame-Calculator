import React from "react";
import Calculator from "./Calculator/Calculator";
import '../Main/Main.scss'
import Result from "./Result/Result";

const Main = () => {
    return(
        <div className="main">
            <div className="main__container wrapper">
                <Calculator/>
                <Result />
            </div>
        </div>
    )
}

export default Main