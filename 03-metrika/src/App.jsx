import React from 'react'
import "./App.css"
import { navBar } from './components/navBar'
import { SectionCard } from './components/SectionCard'

export const App = () => {
  return (
    <>
      <div className='container1'>
        <h1 className='title-metrika'>Metrika</h1>
        <img className='redes-icons'src="../public/icons-redes.png" alt="" />
      </div>
      <SectionCard />

    </>
  )
}

