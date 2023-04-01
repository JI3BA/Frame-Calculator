import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import datas from './data/data.json'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getFetchData = () => {
      console.log(JSON.parse(datas))
    }
    
    getFetchData()
  }, [])


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
