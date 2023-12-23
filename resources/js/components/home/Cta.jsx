import React from 'react'
import styles from '../../style'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className='p-8 flex bg-white m-8 items-center p-10 border rounded-[15px]'>
      <div className="">
    <h2 className={`${styles.heading2} mb-1 text-[32px] font-bold`}>Like our service? <Link className=' text-blue-600' to="/contact-us">Contact us</Link></h2>
    <p className={`${styles.paragraph} max-w-xl text-base font-normal`}>We have more than thousand of creative entrepreneurs and stat joining our business.</p>
    </div>
    {/* <div>
      <input type="text" placeholder='Enter Your Email' className='border border-secondary rounded w-[250px] h-[50px] mx-2 px-3'/>
      <button className='bg-secondary text-white mt-2 p-[13px] rounded pl-2'>Subscribe Us</button>
      <p className='pt-4 pl-4'>Don’t provide any promotional message.</p>
    </div> */}
    </div>
  )
}

export default Cta