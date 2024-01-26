import React from 'react'
import { Link } from 'react-router-dom'

const FooterWidget =  ({title, items}) => {
    return (
      <div className='md:px-5 px-1 py-4 md:ml-16 ml-0'>
          <h4 className='text-xl font-bold'>{title}</h4>
          <ul>{items.map(({ path, label, icon }, i) => (
            <li className='flex py-2' key={i}>
              {icon && <img className='inline-flex pr-3 object-contain' src={icon} alt={label} />}
              {/* <NavLink path={path} key={i} label={label} variant="footer" /> */}
              <Link to={path}
                    spy={true}
                    offset={-70}
                    smooth={true}
                    duration={500}
                    className="nav-item"
                    activeClass="active">{label}</Link>
            </li>
          ))}
          </ul>
      </div>
    )
  }

export default FooterWidget