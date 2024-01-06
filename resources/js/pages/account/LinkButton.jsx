import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const LinkButton = () => {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-blue-600' : 'bg-slate-600';
  };

  return (
    <div className='container mx-auto py-4'>
        <ul className='md:flex gap-2'>
          <button className={`text-white rounded-md p-2 mx-2 md:my-0 my-2 ${isActive('/account/blogs')}`}>
            <Link to="/account/blogs"><li>Blog</li></Link>
          </button>
          <button className={`text-white rounded-md p-2 mx-2 md:my-0 my-2 ${isActive('/account/services')}`}>
            <Link to="/account/services"><li>Service</li></Link> 
          </button>
          <button className={`text-white rounded-md p-2 mx-2 md:my-0 my-2 ${isActive('/account/categories')}`}>
            <Link to="/account/categories"><li>Category</li></Link>
          </button>
          <button className={`text-white rounded-md p-2 mx-2 md:my-0 my-2 ${isActive('/account/portfolios')}`}>
            <Link to="/account/portfolios"><li>Portfolio</li></Link>
          </button>
          <button className={`text-white rounded-md p-2 mx-2 md:my-0 my-2 ${isActive('/account/testomonials')}`}>
            <Link to="/account/testomonials"><li>Testomonial</li></Link>
          </button>
          <button className={`text-white rounded-md p-2 mx-2 md:my-0 my-2 ${isActive('/account/contacts')}`}>
            <Link to="/account/contacts"><li>Contacts</li></Link>
          </button>
        </ul>
    </div>
  )
}

export default LinkButton