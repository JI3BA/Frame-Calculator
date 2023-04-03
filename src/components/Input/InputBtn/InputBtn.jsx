import React from "react";
import './InputBtn.scss'

const InputBtn = ({children}) => {
    return(
        <button className="input__btn">{children}</button>
    )
}

export default InputBtn