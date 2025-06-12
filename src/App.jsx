import { useEffect } from 'react'
import './App.css'
import { getItems } from './firebase'

function App() {
  
  useEffect(() => {
    getItems
  },[])
  

  return (
   <h1>Firebase</h1>
  )
}

export default App