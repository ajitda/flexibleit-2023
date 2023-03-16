import React from 'react'
import { Link } from 'react-router-dom'


const Widget =  ({title, items}) => {
    return (
      <div className='px-5 py-4'>
          <h4>{title}</h4>
          <ul>
          {items.map(({ path, label, icon }, i) => (
            <li className='flex' key={i}>
              {icon && <img src={icon} alt={label} />}
              {/* <NavLink path={path} key={i} label={label} variant="footer" /> */}
              <Link to={path}
                    spy={true}
                    offset={-70}
                    smooth={true}
                    duration={500}
                    className="nav-item"
                    activeClass="active"
                   
                >
        {label}
      </Link>
            </li>
          ))}
          </ul>
      </div>
    )
  }

export default Widget