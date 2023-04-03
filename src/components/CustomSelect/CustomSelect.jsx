import React, { useEffect, useState } from "react";
import '../CustomSelect/CustomSelect.scss'

const CustomSelect = (props) => {
    const [selectText, setSelectText] = useState('')
    const [showOptionList, setShowOptionList] = useState(false)

    

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
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        setSelectText('Choose Option')

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    return(
        <div className="custom-select">
            <div className="custom-select__container">
                <div className={showOptionList ? "custom-select__text active" : "custom-select__text"} onClick={handleListDisplay}>
                    {selectText}
                </div>

                {showOptionList && (
                    <ul className="custom-select__options">
                        {props.optionsList.map((option, index) => {
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