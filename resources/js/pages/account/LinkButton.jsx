import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = () => {
  return (
    <div className='container mx-auto py-4'>
        <ul className='flex gap-2'>
            <Link to="/account/blogs"><li>Blog</li></Link>
            <Link to="/account/services"><li>Service</li></Link> 
            <Link to="/account/categories"><li>Category</li></Link>
            <Link to="/account/portfolios/"><li>Portfolio</li></Link>
            <Link to="/account/testomonials/"><li>Testomonial</li></Link>
        </ul>
    </div>
  )
}

export default LinkButton