import React from "react";
import CustomSelect from "../../CustomSelect/CustomSelect";
import Input from "../../Input/Input";
import '../Calculator/Calculator.scss';
import data from '../../../data/data.json';
import config from '../../../data/config.json';
import Button from "../../Button/Button";

import { useData } from  "../../../hooks/useData";


const Calculator = () => {
    const { dataset, getSquare } = useData()

    
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
                    <p className="calculator__text">Длина (м) - шаг 0,2</p>
                    <Input getData={config.find(item => item.name.includes('Длина'))}/>
                </div>
                <div className="calculator__data calculator__config">
                    <p className="calculator__text">Ширина (м) - шаг 0,2</p>
                    <Input getData={config.find(item => item.name.includes('Ширина'))}/>
                </div>
                <div className="calculator__data calculator__config">
                    <p className="calculator__text">Прочность</p>
                    <CustomSelect optionsList={config.filter(item => item.type.includes('frame'))}/>
                </div>
                <div className="calculator__button">
                    <Button onClick={() => getSquare(dataset)}>Calculate</Button>
                </div>
            </div>
        </>
    )
}

export default Calculator