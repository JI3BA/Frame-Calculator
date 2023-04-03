import React from "react";
import './Input.scss'
import InputBtn from "./InputBtn/InputBtn";

const Input = (props) => {

    return(
        <>
            <input type="number" className="input" min={props.configData.min} max={props.configData.min} value={props.configData.min}/>
            <InputBtn>+</InputBtn>
            <InputBtn>-</InputBtn>
        </> 
    )
}

export default Input