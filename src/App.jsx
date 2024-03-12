import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
    </>
  )
}

export default App
