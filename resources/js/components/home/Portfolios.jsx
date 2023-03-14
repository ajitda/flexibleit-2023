import React from 'react'
import { portfolios } from '../../constants'
import styles from '../../style'
import Portfolio from './Portfolio'

const Portfolios = () => {
  return (
    <>
    <div className='text-center py-24'>
      <h2 className={`${styles.heading2} mb-1`}>Lets Meet Our Projects</h2>
      <p className={`${styles.paragraph} max-w-xl mx-auto`}>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>
    </div>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
      {portfolios.map(portfolio=>{
        return (
          <Portfolio portfolio={portfolio} />
        )
      })}
    </div>
    </>
  )
}

export default Portfolios