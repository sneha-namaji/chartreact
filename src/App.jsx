import React from 'react'
import  Barchart  from './components/BarChart'
import LineChart  from './components/LineChart'
import  AreaChart  from './components/AreaChart'
// import ReactDOM  from 'react-dom/client'


const App = () => {
  return (
    <>
    <div>
    <Barchart/>
    <LineChart/>
    <AreaChart/>
    </div>
    </>
  )
}

export default App