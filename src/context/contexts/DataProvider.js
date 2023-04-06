import React, { useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
    const [dataset, setDataset] = useState([])
    const [square, setSquare] = useState(0)

    const setDataCalculator = (dataCalc) => {
        setDataset([...dataset, dataCalc])
    }

    const getSquare = (dataset) => {
        setSquare(dataset.reduce((acc,item) => acc * item))
    }

    return <DataContext.Provider value={{dataset, square, setDataCalculator, getSquare}}>{children}</DataContext.Provider>
}