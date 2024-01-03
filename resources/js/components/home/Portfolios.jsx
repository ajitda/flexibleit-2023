import React, { useEffect, useState } from 'react'
import { portfolios } from '../../constants'
import styles from '../../style'
import Portfolio from './Portfolio'
import Masonry from "react-responsive-masonry"
import { Link } from 'react-router-dom'


const Portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
     getPortfolios();
  }, []);

  const getPortfolios = () => {
     fetch('/api/allportfolios')
       .then(response => response.json())
       .then(data => {
        console.log('portfolios res :', data)
        const resdata =  data.data;
        setPortfolios(resdata);
        setLoading(false);
       })
       .catch(error => {
        console.error('Error fetching portfolios:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }

  const featuredPortfolios = portfolios.filter((portfolio) => portfolio.featured === 1 )

  return (
    <>
   {loading ? (
        <div className="text-center py-24">
          <h2 className={`${styles.heading2} mb-1`}>Loading...</h2>
        </div>
      ) : (
        <>
    <div className='text-center py-24'>
      <h2 className={`${styles.heading2} mb-1`}>Lets Meet Our Projects</h2>
      <p className={`${styles.paragraph} max-w-xl mx-auto`}>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>
    
    </div>
    
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 -mt-14 mb-8">
      {featuredPortfolios.map((portfolio) => (
        <div key={portfolio.id}>
          <Link to={`/portfolios/${portfolio.slug}`}>
          <Portfolio portfolio={portfolio} />
          </Link>
        </div>
      ))}
    </div>
      <div className='text-center'>
        <Link to={`/all-portfolios`}>
          <button className="bg-secondary text-white inline-block px-8 py-5 rounded-md">View All Projects</button>
        </Link>
      </div>
      </>
      )}
    </>
  )
}

export default Portfolios