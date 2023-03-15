import React from 'react'
import { portfolios } from '../../constants'
import styles from '../../style'
import Portfolio from './Portfolio'
import Masonry from "react-responsive-masonry"


const Portfolios = () => {
  return (
    <>
   
    <div className='text-center py-24'>
      <h2 className={`${styles.heading2} mb-1`}>Lets Meet Our Projects</h2>
      <p className={`${styles.paragraph} max-w-xl mx-auto`}>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>
    </div>
    
    <div className=''>
    <Masonry>
      {portfolios.map(portfolio=>{
        return (
          <Portfolio portfolio={portfolio} />
        )
      })}
      </Masonry>
    </div>
    
    </>
  )
}

export default Portfolios