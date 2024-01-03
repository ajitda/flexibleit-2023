import React, { useState, useEffect } from 'react'
import Masonry from 'react-responsive-masonry';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from '../../../style';
import { Helmet } from 'react-helmet';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function AllPortfolio() {

    const [portfolios, setPortfolios] = useState();
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(6);
    const [totalPortfolios, setTotalPortfolios] = useState(0);
    const [metaTags, setMetaTags] = useState({
      title: 'Visit our completed ecommcerce projects and contact for yours',
      description: 'Are you looking to make your business more easier and easily manageable. We can provide your custom automation software or ecommerce website for making your business easier. We anlyze your business and can give you a nice solution',
      url: window.location.href ,
    });

  useEffect(()=>{
    getAllPortfolios();
 }, [perPage, currentPage]);

 const getAllPortfolios = () => {
    fetch(`/api/portfolios?per_page=${perPage}&page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
       console.log('All portfolios res :', data)
       const resdata = data.data;
       setPortfolios(resdata.data);
       setTotalPortfolios(resdata.total);
       setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching portfolios:', error);
        setLoading(false);
      });
 }

 const totalPages = Math.ceil(totalPortfolios / perPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        setLoading(true);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        setLoading(true);
        }
    };

  return (
    <div>
      <div>
        <Helmet>
          <meta name="title" content={metaTags.title} />
          <meta name="description" content={metaTags.description} />
          <meta property="og:title" content={metaTags.title} />
          <meta property="og:description" content={metaTags.description} />
          <meta property="og:image" content={metaTags.image} />
          <meta property="og:url" content={metaTags.url} />
          {/* Twitter meta tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={metaTags.title} />
          <meta name="twitter:description" content={metaTags.description} />
          {/* Canonical URL */}
          <link rel="canonical" href={window.location.href} />
        </Helmet>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
          </div>
      </div>
      
      <div className='text-center md:-mb-16 -mb-8'>
        <h2 className={`${styles.heading2} mb-1`}>All Projects</h2>
        <p className={`${styles.paragraph} md:px-20 px-12 `}>We have many ready-made projects. Which is perfect for businesses looking for a quick and cost-effective solution. All our projects are built using latest technology, Note: Can be customized as per customer's specific needs.</p>
      </div>
      {loading ? (
        <div className='text-center font-semibold text-3xl py-36'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="">
          <div className='md:p-20 p-10 grid md:grid-cols-3 grid-cols-1 gap-5'>
          {portfolios?.map((portfolio) => (
            <div key={portfolio.id}>
              <Link to={`/portfolios/${portfolio.slug}`}>
              <Portfolio portfolio={portfolio} />
              </Link>
            </div>
          ))}
          </div>
          <div className="flex justify-end md:mr-24 mr-32 pb-16">
              <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="mr-2 px-3 py-3 bg-gray-200 rounded-md cursor-pointer"
              >
                  <SlArrowLeft />
              </button>
                  <p className="mr-3 text-gray-600 my-auto">
                    {((currentPage - 1) * perPage) + 1}-{Math.min(currentPage * perPage, totalPortfolios)} of {totalPortfolios}
                  </p>
              <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-3 bg-gray-200 rounded-md cursor-pointer"
              >
                  <SlArrowRight />
              </button>
          </div>
        </div>
      )}

      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Footer />
          </div>
      </div>
    </div>
  );
}
