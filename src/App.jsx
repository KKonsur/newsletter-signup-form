import React, { useEffect, useState } from 'react'
import './index.js'
import './index.scss'
import './App.scss'
import ThanksBox from './components/ThanksBox/ThanksBox.jsx'
import SignupContainer from './components/SignupContainer/SignupContainer.jsx'
import imgDekstop from './assets/images/illustration-sign-up-desktop.svg'
import imgMobile from './assets/images/illustration-sign-up-mobile.svg'

const App = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
   const [data, setData] = useState()

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

   const setDataHandler = (email) => {
      setData(email)
   }

   const resetApp = () => {
      setData()
   }

   const img = windowWidth >= 500 ? imgDekstop : imgMobile
   const appStyles = !data ? 'app' : 'app app--success'

   return (
      <main className={appStyles}>
         {data ? <ThanksBox onReset={resetApp} email={data} /> : <SignupContainer onSetData={setDataHandler} />}
         {!data && (
            <section className='mainImgContainer'>
               <img src={img} alt='' />
            </section>
         )}
      </main>
   )
}

export default App
