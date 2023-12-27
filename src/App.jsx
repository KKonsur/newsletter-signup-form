import React, { useEffect, useState } from 'react'
import './index.js'
import './index.scss'
import './App.scss'
import SignupContainer from './components/SignupContainer/SignupContainer.jsx'
import imgDekstop from './assets/images/illustration-sign-up-desktop.svg'
import imgMobile from './assets/images/illustration-sign-up-mobile.svg'

const App = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
   const [data, setData] = useState([])

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleResize)
      handleResize()

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   const img = windowWidth >= 500 ? imgDekstop : imgMobile

   return (
      <main className='app'>
         <SignupContainer />
         <section className='mainImgContainer'>
            <img src={img} alt='' />
         </section>
      </main>
   )
}

export default App
