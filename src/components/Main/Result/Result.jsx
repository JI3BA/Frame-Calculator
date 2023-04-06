import React, { useState } from "react";
import Table from "../../Table/Table";
import './Result.scss'

const Result = () => {
    const [square, setSquare] = useState()

    return(
        <div className="result">
            <p className="result__text">Площадь изделия: {square}м²</p>
            <p className="result__text">Размер ячейки: </p>
            <Table />
        </div>
    )
}

export default Result