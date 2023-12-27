import React from 'react'
import styles from './SignupContainer.module.scss'
import SignupForm from '../SignupForm/SignupForm'

const SignupContainer = () => {
   return (
      <section className={styles.signupContainer}>
         <div className={styles.signupTextContainer}>
            <h1 className={styles['signupTextContainer--heading']}>Stay uptaded!</h1>
            <p className={styles['signupTextContainer--paragraph']}>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className={styles['signupTextContainer--list']}>
               <li className={styles['signupTextContainer--listItem']}>Product discovery and building what matters</li>
               <li className={styles['signupTextContainer--listItem']}>Measuring to ensure updates are a success</li>
               <li className={styles['signupTextContainer--listItem']}>And much more!</li>
            </ul>
         </div>
         <SignupForm />
      </section>
   )
}

export default SignupContainer
