
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { CurrencyContext } from './context/CurrencyContext';
function App() {

  const [curreny, setCurrency] = useState('usd');

  return (
    <>
      <CurrencyContext.Provider value={{curreny, setCurrency }}>
        <Home/>
      </CurrencyContext.Provider>
    </>
  )
}

export default App
