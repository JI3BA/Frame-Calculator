import React, { useEffect, useState } from "react";
import '../CustomSelect/CustomSelect.scss'
import { useData } from "../../hooks/useData";

const CustomSelect = ({ optionsList }) => {
    const { tableData, setDataTable } = useData()
    const [selectText, setSelectText] = useState('Выбор')
    const [showOptionList, setShowOptionList] = useState(false)
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return document.removeEventListener("mousedown", handleClickOutside);
    })

    useEffect((e) => {
        console.log(tableData)
    }, [selectText])

    const handleClickOutside = (e) => {
        if (!e.target.classList.contains("custom-select__option") &&
          !e.target.classList.contains("selected__text")){
          setShowOptionList(false)
        }
    };
    
    const handleListDisplay = () => {
        setShowOptionList(prev => !prev)
    };
    
    const handleOptionClick = (e) => {
        setSelectText(e.target.getAttribute("data-name"))
        setShowOptionList(false)
        setDataTable(optionsList.find(option => option.name === e.target.getAttribute("data-name")))
    };

    return(
        <div className="custom-select">
            <div className="custom-select__container">
                <div className={showOptionList ? "custom-select__text active" : "custom-select__text"} onClick={handleListDisplay}>
                    {selectText}
                </div>

                {showOptionList && (
                    <ul className="custom-select__options">
                        {optionsList.map((option, index) => {
                        return (
                            <li
                            className="custom-select__option"
                            data-name={option.name}
                            key={index}
                            onClick={handleOptionClick}
                            >
                            {option.name}
                            </li>
                        );
                        })}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default CustomSelect