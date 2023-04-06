import React, { useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
    const [data,setData] = useState([])

    const setDataCalculator = (dataCalc) => {
        setData([...data, dataCalc])
    }

    const getSquare = (data) => {
        setSquare(data.reduce((acc,item) => acc * item))
    }

    return <DataContext.Provider value={{data, setDataCalculator, getSquare}}>{children}</DataContext.Provider>
}