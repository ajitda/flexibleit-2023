import React, { useState, useEffect } from 'react'
import Masonry from 'react-responsive-masonry';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../../style';

export default function AllPortfolio() {

    const [portfolios, setPortfolios] = useState();

  useEffect(()=>{
    getAllPortfolios();
 }, []);

 const getAllPortfolios = () => {
    fetch('/api/portfolios')
      .then(response => response.json())
      .then(data => {
       console.log('All portfolios res :', data)
       setPortfolios(data.data);
      });
 }

  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
          </div>
      </div>
      
      <div className='text-center -mb-10'>
        <h2 className={`${styles.heading2} mb-1`}>All Portfolios</h2>
      </div>
      
      <div className="p-20 col-md-2">
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
      
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Footer />
          </div>
      </div>
    </div>
  )
}
