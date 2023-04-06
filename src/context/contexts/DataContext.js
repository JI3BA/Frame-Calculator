import { createContext } from 'react';

export const DataContext = createContext({
    data: [],
    square: 0,
    setData: () => {},
    getSquare: () => {},
})