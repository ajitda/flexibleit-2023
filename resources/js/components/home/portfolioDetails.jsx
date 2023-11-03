import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../style';

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
            {portfolio ? (
                <div>
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
        </div>
    );
}
