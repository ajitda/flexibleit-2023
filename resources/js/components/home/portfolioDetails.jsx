import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../style';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PortfolioDetails() {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        getPortfolioDetails(id); // Pass id as an argument
    }, [id]); // Include id in the dependency array

    const getPortfolioDetails = (id) => {
        fetch(`/api/portfolios/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.data) {
                setPortfolio(data.data);
            }
        });
    }
console.log('portfolio',portfolio)
    return (
        <div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            
            {portfolio ? (
                <div>
                    <div className='text-center -mb-28'>
                        <h2 className={`${styles.heading2} `}>{portfolio.title}</h2>
                    </div>
                    <div id="product" className="p-36 ">
                    <figure>
                        <img className=" rounded-lg" src={portfolio.thumbnail} alt="" />
                    </figure>
                        <h2 className="">{portfolio.title}</h2>
                        <p className={`${styles.paragraph}`}>{portfolio.description}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>                                                        
        </div>
    );
}
