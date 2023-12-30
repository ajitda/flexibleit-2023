import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = () => {
  return (
    <div className='container mx-auto py-4'>
        <ul className='md:flex gap-2'>
          <button className=' bg-slate-600 text-white rounded-md p-2 mx-2 md:my-0 my-2'>
            <Link to="/account/blogs"><li>Blog</li></Link>
          </button>
          <button className=' bg-slate-600 text-white rounded-md p-2 mx-2'>
            <Link to="/account/services"><li>Service</li></Link> 
          </button>
          <button className=' bg-slate-600 text-white rounded-md p-2 mx-2'>
            <Link to="/account/categories"><li>Category</li></Link>
          </button>
          <button className=' bg-slate-600 text-white rounded-md p-2 mx-2'>
            <Link to="/account/portfolios/"><li>Portfolio</li></Link>
          </button>
          <button className=' bg-slate-600 text-white rounded-md p-2 mx-2'>
            <Link to="/account/testomonials/"><li>Testomonial</li></Link>
          </button>
          <button className=' bg-slate-600 text-white rounded-md p-2 mx-2'>
            <Link to="/account/contacts"><li>Contacts</li></Link>
          </button>
        </ul>
    </div>
  )
}

export default LinkButton