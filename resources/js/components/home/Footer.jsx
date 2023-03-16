import React from 'react'
import { logo } from '../../assets'
import { menuItems } from '../../constants'
import Widget from './widget'

const Footer = () => {
  return (
    <footer >
      <div className='flex grid grid-cols-5 gap-4'>
        <div className='py-8'>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className='py-4'>
            <a href="#">Terms of use</a>
            <span> | </span>
            <a href="#">Privacy</a>
          </div>
          <p>Copyright by {new Date().getFullYear()} FlexibleIT</p>
        </div>
        {menuItems.map(({ id, title, items }) => (
            <Widget key={id} title={title} items={items} />
          ))}
      </div>
    </footer>
  )
}

export default Footer