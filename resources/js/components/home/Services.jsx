import React from 'react'
import { features } from '../../constants'
import styles from '../../style'
import Service from './Service'

const Services = () => {
  return (<>
    <div className='text-center py-24'>
      <h2 className={`${styles.heading2} mb-1`}>Grow your startup with our Service</h2>
      <p className={`${styles.paragraph} max-w-xl mx-auto`}>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>
    </div>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
      {features.map(feature=>{
        return (
          <Service service={feature} />
        )
      })}
    </div>
    </>
  )
}

export default Services