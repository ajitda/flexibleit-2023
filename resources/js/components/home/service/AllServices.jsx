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
        
        <div className='text-center -mb-10'>
            <h2 className={`${styles.heading2} mb-1`}>All Blogs</h2>
        </div>

        <div className='p-20 grid md:grid-cols-3 grid-cols-1 gap-5'>
        {services?.map(feature=>{
            return (
                <div key={feature.id}>
                    <Link to={`/services/${feature.id}`}>
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
