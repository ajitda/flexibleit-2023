import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../../style';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function ServiceDetails() {

    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        getServiceDetails(id); // Pass id as an argument
    }, [id]); // Include id in the dependency array

    const getServiceDetails = (id) => {
        fetch(`/api/services/${id}`)
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
              <figure>
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
  )
}
