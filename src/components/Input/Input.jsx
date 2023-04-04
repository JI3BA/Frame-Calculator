import React, { useState } from "react";
import './Input.scss'
import '../Input/InputBtn/InputBtn.scss'
import InputBtn from "./InputBtn/InputBtn";

const Input = (props) => {
    const config = props.configData
    const [inputValue, setInputValue] = useState(config.min)


    const onClickBtn = (e) => {
        if(e.target.className.includes('plus')){
            setInputValue(Number(Number(inputValue) + config.step).toFixed(1))
        }else{
            setInputValue(Number(Number(inputValue - config.step).toFixed(1)))
        }
    }

    return(
        <>
            <div className="input__container">
                <input type="number" className="input" 
                min={config.min}
                max={config.max}
                onChange={(e) => setInputValue(e.target.value)} 
                onBlur={() => setInputValue(Number(inputValue).toFixed(1))}
                value={(Number(inputValue))}/>
                <InputBtn className='input__btn input__btn--plus' onClick={onClickBtn}>+</InputBtn>
                <InputBtn className='input__btn input__btn--minus' onClick={onClickBtn}>-</InputBtn>
            </div>
           
        </> 
    )
}

export default Input