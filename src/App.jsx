import React from 'react'
import './index.js'
import './index.scss'
import './App.scss'
import SignupContainer from './components/SignupContainer/SignupContainer.jsx'
import img from './assets/images/illustration-sign-up-desktop.svg'

const App = () => {
   return (
      <main className='app'>
         <SignupContainer />
         <div className='mainImgContainer'>
            <img src={img} alt='' />
         </div>
      </main>
   )
}

export default App
