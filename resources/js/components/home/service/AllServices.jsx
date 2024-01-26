import React, { useEffect, useState } from 'react';
import Service from '../Service';
import styles from '../../../style';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function AllServices() {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [metaTags, setMetaTags] = useState({
        title: 'We are proving realstate & ecommerce website and pos software',
        description: 'Are you looking to make your business more easier and easily manageable. We can provide your custom automation software or ecommerce website for making your business easier. We anlyze your business and can give you a nice solution',
        url: window.location.href ,
      });

    useEffect(()=>{
        getServices();
    }, []);

    const getServices = () => {
        fetch('/api/allservices')
        .then(response => response.json())
        .then(data => {
            console.log('services res ', data)
            const resdata = data.data;
            setServices(resdata);
            setLoading(false);
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
            {/* Canonical URL */}
            <link rel="canonical" href={window.location.href} />
            </Helmet>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
        
            <div className='text-center mt-10'>
                <h2 className={`${styles.heading2} mb-1 px-20`}>Services we can help you with</h2>
                <p className={`${styles.paragraph} md:px-96 px-14`}>We are providing best quality web design and development services for you. We are commited to get you best output.</p>
            </div>
            {loading ? (
                <div className='text-center font-semibold text-3xl py-36'>
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-28'>
                    {services?.map(feature=>{
                        return (
                            <div key={feature.id} className=''>
                                <Link to={`/services/${feature.slug}`}>
                                    <Service service={feature} />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            )}
            </div>
        </div>
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Footer />
          </div>
        </div>
    </div>
  )
}