import { useState } from 'react'

import './App.css'
import Navbar from  "./components/Navbar"
import Header from "./components/Header"
import List from "./components/List"
import Recipe from "./components/Recipe"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Header />
    <List />
    <Recipe />
    <Footer />
    </>
  )
}

export default App
