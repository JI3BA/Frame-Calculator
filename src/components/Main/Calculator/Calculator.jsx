import React from "react";
import CustomSelect from "../../CustomSelect/CustomSelect";
import Input from "../../Input/Input";
import '../Calculator/Calculator.scss'
import data from '../../../data/data.json'
import config from '../../../data/config.json'

const Calculator = () => {
    
    
    return(
        <>
            <div className="calculator__container">
                <div className="calculator__data">
                    <p className="calculator__text">Листы</p>
                    <CustomSelect optionsList={data.filter(item => item.type.includes('list'))}/>
                </div>
                <div className="calculator__data calculator__config">
                    <p className="calculator__text">Трубы</p>
                    <CustomSelect optionsList={data.filter(item => item.type.includes('pipe'))}/>
                </div>
                <div className="calculator__data calculator__config">
                    <p className="calculator__text">Длина (шаг 0,2)м</p>
                    <Input configData={config.find(item => item.name.includes('Длина'))}/>
                </div>
                <div className="calculator__data calculator__config">
                    <p className="calculator__text">Ширина (шаг 0,2)м</p>
                    <Input configData={config.find(item => item.name.includes('Ширина'))}/>
                </div>
                <div className="calculator__data calculator__config">
                    <p className="calculator__text">Прочность</p>
                    <CustomSelect optionsList={config.filter(item => item.type.includes('frame'))}/>
                </div>
            </div>
        </>
    )
}

export default Calculator