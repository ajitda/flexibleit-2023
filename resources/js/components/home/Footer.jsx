import React from 'react'
import { logo } from '../../assets'
import { menuItems } from '../../constants'
import FooterWidget from './FooterWidget'

const Footer = () => {
  return (
    <footer>
      <hr className='md:mb-2 mb-5' />
      <div className='grid md:grid-cols-5'>
      <div className=''>
          <img src={logo} alt="" className=' w-60 md:h-[205px] md:pl-14 ml-16 mb-4' />
        </div>
        {menuItems.map(({ id, title, items }) => (
            <div className='md:ml-0 ml-10'>
            <FooterWidget key={id} title={title} items={items} />
            </div>
          ))}
      </div>
      <hr />
      <div className='grid grid-cols-2 gap-4'> {/* Added flex and items-end classes */}
        
        <div className='flex md:pl-16 md:p-8 p-5'>
        <p className='text-md mr-1'>&copy;</p>
          <p className='flex'>Copyright by {new Date().getFullYear()} DEVSBRAIN</p>
          
        </div>
        <div className='md:p-8 p-5 ml-5 md:ml-80'>
        <a href="/privacy">Terms of use</a>
          <span> | </span>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer