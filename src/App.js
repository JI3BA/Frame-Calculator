import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { DataProvider } from './context/contexts';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </DataProvider>
  );
}

export default App;
