import {useContext} from 'react';

import { DataContext } from '../context/contexts/DataContext'

export const useData = () => useContext(DataContext);