import React, { useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
    const [data,setData] = useState([])
    

    return <DataContext.Provider value={{data}}>{children}</DataContext.Provider>
}