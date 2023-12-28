import React from 'react'
import styles from './ThanksBox.module.scss'
import img from '../../assets/images/icon-success.svg'

const ThanksBox = ({ email, onReset }) => {
   return (
      <section className={styles.thanksBox}>
         <div className={styles['thanksBox__imgContainer']}>
            <img className={styles['thanksBox__img']} src={img} alt='' />
         </div>
         <h1 className={styles['thanksBox__heading']}>Thanks for subscribing!</h1>
         <p className={styles['thanksBox__paragraph']}>
            A confirmation email has been sent to <span>{email}</span>. Please open it and click the button inside to confirm your
            subscription.
         </p>
         <button onClick={() => onReset()} className={styles['thanksBox__button']}>
            Dissmiss message
         </button>
      </section>
   )
}

export default ThanksBox
