// import { useState } from 'react'
import './App.css'
import Routing from './components/Rounting/Routing'
// import Home from './pages/Home'
// import { CurrencyContext } from './context/CurrencyContext';
function App() {

  // const [currency, setCurrency] = useState('usd');

  return (
    <>
      {/* <CurrencyContext.Provider value={{currency, setCurrency }}> */}
        {/* <Home/> */}
      {/* </CurrencyContext.Provider> */}
      <Routing/>
    </>
  )
}

export default App
