import React from 'react'
import styles from './SignupForm.module.scss'

const SignupForm = () => {
   const submitHandler = (e) => {
      e.preventDefault()
   }
   return (
      <form onSubmit={submitHandler} className={styles.signupForm}>
         <label className={styles['signupForm__emailLabel']} htmlFor='email'>
            Email address
         </label>
         <input className={styles['signupForm__emailInput']} placeholder='email@company.com' id='email' type='email' />
         <button className={styles['signupForm__submit']} type='submit'>
            Subscribe to monthly newsletter
         </button>
      </form>
   )
}

export default SignupForm
