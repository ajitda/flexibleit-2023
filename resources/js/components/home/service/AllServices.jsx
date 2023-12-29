import React, { useEffect, useState } from 'react';
import Service from '../Service';
import styles from '../../../style';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

export default function AllServices() {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        getServices();
    }, []);

    const getServices = () => {
        fetch('/api/services')
        .then(response => response.json())
        .then(data => {
            console.log('services res ', data)
            setServices(data.data);
        });
    }


  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
          </div>
        </div>
        
        <div className='text-center md:-mb-10'>
            <h2 className={`${styles.heading2} mb-1`}>Services we can help you with</h2>
            <p className={`${styles.paragraph} px-12`}>We are providing best quality web design and development services for you. We are commited to get you best output.</p>
        </div>

        <div className='md:p-20 px-12 py-10 grid md:grid-cols-3 grid-cols-1 gap-5'>
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

        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Footer />
          </div>
        </div>
    </div>
  )
}
