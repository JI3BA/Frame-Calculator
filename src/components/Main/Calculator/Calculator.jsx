import React, { useState } from "react";
import CustomSelect from "../../CustomSelect/CustomSelect";
import data from '../../../data/data.json'
import context from '../../../data/config.json'

const Calculator = () => {
    
    return(
        <>
            <CustomSelect optionsList={data}/>
        </>
    )
}

export default Calculator