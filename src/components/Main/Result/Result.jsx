import React from "react";
import Table from "../../Table/Table";
import './Result.scss'

const Result = () => {
    return(
        <div className="result">
            <p className="result__text">Площадь изделия: </p>
            <p className="result__text">Размер ячейки: </p>
            <Table />
        </div>
    )
}

export default Result