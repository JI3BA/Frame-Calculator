import React, { useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
    const [dataset, setDataset] = useState([])
    const [square, setSquare] = useState(0)
    const [tableData, setTableData] = useState([])

    const setDataCalculator = (dataCalc) => {
        setDataset([...dataset, dataCalc])
    }

    const setDataTable = (data) => {
        setTableData([...tableData, data])
    }

    const getSquare = (dataset) => {
        setSquare(dataset.reduce((acc,item) => acc * item))
    }

    return <DataContext.Provider value={{dataset, tableData, square, setDataCalculator, getSquare, setDataTable}}>{children}</DataContext.Provider>
}