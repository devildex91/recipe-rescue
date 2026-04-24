import {useState} from 'react'


import './App.css'
import Navbar from  "./components/Navbar"
import Header from "./components/Header"
import Recipe from "./components/Recipe"
import Footer from "./components/Footer"

export default function App() {
 

  const [recipe, setRecipe]=useState(" ")

  return (
    <>
    <Navbar />
    <Header />
    <Recipe />
    <Footer />
    </>
  )
}


