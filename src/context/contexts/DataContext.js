import { createContext } from 'react';

export const DataContext = createContext({
    data: [],
    tableData: [],
    square: 0,
    setData: () => {},
    getSquare: () => {},
    setDataTable: () => {},
})