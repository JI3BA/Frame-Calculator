import React, { useEffect, useState } from "react";
import './Input.scss'
import InputBtn from "./InputBtn/InputBtn";
import { useData } from "../../hooks/useData";

const Input = ({getData}) => {
    const { setDataCalculator } = useData()
    const [disabledMinus, setDisabledMinus] = useState(false)
    const [disabledPlus, setDisabledPlus] = useState(false)
    const [inputValue, setInputValue] = useState(getData.min)

    useEffect(() => {
        if(inputValue <= getData.min){
            setDisabledMinus(true)
            setDisabledPlus(false)
        }else if(inputValue >= getData.max){
            setDisabledPlus(true)
            setDisabledMinus(false)
        }else{
            setDisabledPlus(false)
            setDisabledMinus(false)
        }
        
    }, [inputValue, getData.min, getData.max])

    const onClickBtn = (e) => {
        if(e.target.className.includes('plus')){
            setInputValue(Number(Number(inputValue) + getData.step).toFixed(1))
        }else{
            setInputValue(Number(Number(inputValue - getData.step).toFixed(1)))
        }
    }

    return(
        <>
            <div className="input__container" onBlur={() => setDataCalculator(inputValue)}>
                <input type="number" className="input" 
                onChange={(e) => setInputValue(e.target.value)} 
                onBlur={() => setInputValue(Number(inputValue).toFixed(1))}
                value={(Number(inputValue))} />
                <InputBtn disabled={disabledPlus} className='input__btn input__btn--plus' onClick={onClickBtn}>+</InputBtn>
                <InputBtn disabled={disabledMinus} className='input__btn input__btn--minus' onClick={onClickBtn}>-</InputBtn>
            </div>
        </> 
    )
}

export default Input