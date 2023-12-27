import React from 'react'
import styles from './SignupForm.module.scss'

const SignupForm = () => {
   return (
      <form className={styles.signupForm}>
         <label htmlFor='email'></label>
         <input id='email' type='email' />
         <button type='submit'>Subscribe to monthly newsletter</button>
      </form>
   )
}

export default SignupForm
