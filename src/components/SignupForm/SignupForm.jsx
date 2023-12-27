import React, { useState } from 'react'
import styles from './SignupForm.module.scss'

const SignupForm = () => {
   const [email, setEmail] = useState('')
   const [isEmailValid, setIsEmailValid] = useState('empty')

   const changeEmailHandler = (e) => {
      setEmail(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      isEmailValid === 'empty' && setIsEmailValid(false)
      // isEmailValid === true && alert('dziala')
   }

   const inputBlurHandler = () => {
      if (email.length > 0) {
         const isValid = /^@?[a-zA-Z]+(\.[a-zA-Z]+)?$/.test(email)
         setIsEmailValid(isValid ? false : true)
      } else {
         setIsEmailValid(false)
      }
   }

   const inputFocusHandler = () => {
      setIsEmailValid(true)
   }

   const invalidMessage = <span className={styles['signupForm__invalidMessage']}>Valid Email required</span>
   const inputStyles =
      isEmailValid === true || isEmailValid === 'empty'
         ? styles['signupForm__emailInput']
         : `${styles['signupForm__emailInput']} ${styles['signupForm__emailInput--invalid']}`
   return (
      <form onSubmit={submitHandler} className={styles.signupForm}>
         {!isEmailValid && invalidMessage}
         <label className={styles['signupForm__emailLabel']} htmlFor='email'>
            Email address
         </label>
         <input
            onBlur={inputBlurHandler}
            onFocus={inputFocusHandler}
            onChange={changeEmailHandler}
            className={inputStyles}
            placeholder='email@company.com'
            id='email'
            type='text'
            value={email}
         />
         <button className={styles['signupForm__submit']} type='submit'>
            Subscribe to monthly newsletter
         </button>
      </form>
   )
}

export default SignupForm
