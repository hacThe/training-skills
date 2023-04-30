import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginateWithUseSWR from './features/PaginateWithUseSWR'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginateWithUseSWR />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
