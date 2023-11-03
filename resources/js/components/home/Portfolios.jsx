import React, { useEffect, useState } from 'react'
import { portfolios } from '../../constants'
import styles from '../../style'
import Portfolio from './Portfolio'
import Masonry from "react-responsive-masonry"
import { Link } from 'react-router-dom'


const Portfolios = () => {
  const [portfolios, setPortfolios] = useState();

  useEffect(()=>{
     getPortfolios();
  }, []);

  const getPortfolios = () => {
     fetch('/api/portfolios')
       .then(response => response.json())
       .then(data => {
        console.log('portfolios res :', data)
        setPortfolios(data.data);
       });
  }

  return (
    <>
   
    <div className='text-center py-24'>
      <h2 className={`${styles.heading2} mb-1`}>Lets Meet Our Projects</h2>
      <p className={`${styles.paragraph} max-w-xl mx-auto`}>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>
    </div>
    
    <div className=''>
    <Masonry>
      {portfolios?.map((portfolio) => (
        <div key={portfolio.id}>
          <Link to={`/portfolios/${portfolio.id}`}>
          <Portfolio portfolio={portfolio} />
          </Link>
        </div>
      ))}
      </Masonry>
    </div>
    
    </>
  )
}

export default Portfolios