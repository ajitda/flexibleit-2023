import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from '../../../style';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';
import Portfolio from '../Portfolio';

export default function ServiceDetails() {

    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [portfolios, setPortfolios] = useState();
    const [metaTags, setMetaTags] = useState({
      title: 'Default Title',
      description: 'Default Description',
      image: 'Default Image URL',
      url:  'https://devsbrain.com/',
    });

    useEffect(() => {
        getServiceDetails(slug); // Pass id as an argument
    }, [slug]); // Include id in the dependency array

    const updateMetaTags = (portfolioData) => {
      if (portfolioData) {
        const updatedMetaTags = {
          title: portfolioData.title,
          description: portfolioData.description,
          image: portfolioData.thumbnail,
          url: window.location.href,
        };
        setMetaTags(updatedMetaTags);
      }
    };
  
    // useEffect(() => {
    //   // Update URL whenever the location changes
    //   setMetaTags(prevMetaTags => ({
    //     ...prevMetaTags,
    //     url: window.location.href,
    //   }));
    // }, [window.location.href]);

    const getServiceDetails = (slug) => {
        fetch(`/api/devsbrain/services/${slug}`)
        .then(response => response.json())
        .then(data => {
          console.log('first', data)
            if (data.data) {
                setService(data.data);
                setPortfolios(data.data.portfolios);
                updateMetaTags(data.data);
            }
        });
    }

    

  return (
    <div className='w-full overflow-hidden font-b612'>
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
            <meta name="twitter:image" content={metaTags.image} />
            {/* Canonical URL */}
            <link rel="canonical" href={window.location.href} />
          </Helmet>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
            
        {service ? (
        <div className="">
          <div className='grid md:grid-cols-2 grid-cols-1'>
          <div>
            <div className="p-24">
              <figure className='md:px-40'>
                <img className="rounded-lg" src={service.thumbnail} alt="" />
              </figure>
            </div>
          </div>
          <div className="md:pt-24 p-10">
          <h2 className="">{service.title}</h2>
            <h2 className={styles.heading2}>{service.title}</h2>
            <div>
              <p className="font-medium">Short description:</p>
              <p className={`${styles.paragraph} md:pr-28`}>{service.description}</p>
            </div>
            <div className="mt-4">
                <Link to={`/contact-us`}>
                  <button className="bg-black text-white inline-block px-4 py-2 rounded-md">Contact us</button>
                </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className='text-center'>
            <h1 className='text-xl font-bold md:pt-10'>{service.title}'s Portfolios</h1>
          </div>
          <div className='md:p-20 p-10 grid md:grid-cols-3 grid-cols-1 gap-5'>
        {portfolios?.map((portfolio) => (
          <div key={portfolio.id}>
            <Link to={`/portfolios/${portfolio.slug}`}>
            <Portfolio portfolio={portfolio} />
            </Link>
          </div>
        ))}
        </div>
    </div>
    </div>
        
        
      ) : (
        <div className='text-center text-3xl mb-10'>
          <h1>Loading...</h1>
        </div>
      )}
      
            
            <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>   
    </div>
  )
}
