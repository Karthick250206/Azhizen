import { useState } from 'react'
import './App.css'
import Service from '../src/Service/Service'
import TimelineComponent from './components/TimelineComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Service/>
      <TimelineComponent/>
       
    </>
  )
}

export default App
