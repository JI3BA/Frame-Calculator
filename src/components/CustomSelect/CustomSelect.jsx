import React, { useEffect, useState } from "react";

const CustomSelect = () => {
    const [selectText, setSelectText] = useState('')
    const [showOptionList, setShowOptionList] = useState(false)
    const [optionsList, setOptionsList] = useState([])

    

    const handleClickOutside = (e) => {
        if (!e.target.classList.contains("custom-select__option") &&
          !e.target.classList.contains("selected__text")){
          setShowOptionList(false)
        }
      };
    
    const handleListDisplay = () => {
        setShowOptionList(!showOptionList)
      };
    
    const handleOptionClick = (e) => {
        setSelectText(e.target.getAttribute("data-name"))
        setShowOptionList(false)
    };

    return(
        <div className="custom-select">
            <div className="custom-select__container">
                <div
                className={showOptionList ? "custom-select__text active" : "custom-select__text"}
                onClick={handleListDisplay()}
                >
                    {selectText}
                </div>

                {showOptionList && (
                    <ul className="custom-select__options">
                        {optionsList.map(option => {
                        return (
                            <li
                            className="custom-select__option"
                            data-name={option.name}
                            key={option.id}
                            onClick={handleOptionClick()}
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