
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CoinTable from './components/CoinTable/CoinTable'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [curreny, setCurrency] = useState('usd')

  return (
    <>
      {curreny}
      <Navbar setCurrency={setCurrency}/>
      <Banner/>
      <CoinTable curreny={curreny}/>
    </>
  )
}

export default App
