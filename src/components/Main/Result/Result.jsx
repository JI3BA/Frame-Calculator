import React from "react";
import Table from "../../Table/Table";
import './Result.scss'
import { useData } from "../../../hooks/useData";

const Result = () => {
    const { square } = useData()

    return(
        <div className="result">
            <p className="result__text">Площадь изделия: {Number(square).toFixed(1)}м²</p>
            <p className="result__text">Размер ячейки: </p>
            <Table />
        </div>
    )
}

export default Result