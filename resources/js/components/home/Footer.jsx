import React from 'react'
import { logo } from '../../assets'
import { menuItems } from '../../constants'
import FooterWidget from './FooterWidget'

const Footer = () => {
  return (
    <footer>
      <div className='flex grid grid-cols-5 gap-4'>
      <div className='m-4 mt-24'>
          <img src={logo} alt="" />
        </div>
        {menuItems.map(({ id, title, items }) => (
            <div className=''>
            <FooterWidget key={id} title={title} items={items} />
            </div>
          ))}
      </div>
      <hr />
      <div className='grid grid-cols-2 gap-4'> {/* Added flex and items-end classes */}
        
        <div className=' p-8'>
          <p>Copyright by {new Date().getFullYear()} FlexibleIT</p>
          
        </div>
        <div className=' p-8 ml-80'>
        <a href="#">Terms of use</a>
          <span> | </span>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer