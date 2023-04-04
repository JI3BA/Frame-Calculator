import React from "react";
import './InputBtn.scss'

const InputBtn = ({children, className, onClick, disabled}) => {
    return(
        <button className={className} disabled={disabled} onClick={onClick}>{children}</button>
    )
}

export default InputBtn