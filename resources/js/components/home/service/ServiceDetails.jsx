import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from '../../../style';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function ServiceDetails() {

    const { slug } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        getServiceDetails(slug); // Pass id as an argument
    }, [slug]); // Include id in the dependency array

    const getServiceDetails = (slug) => {
        fetch(`/api/devsbrain/services/${slug}`)
        .then(response => response.json())
        .then(data => {
            if (data.data) {
                setService(data.data);
            }
        });
    }
    console.log('services:',service)

    

  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            
            {service ? (
        <div className="grid md:grid-cols-2 grid-cols-1">
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
