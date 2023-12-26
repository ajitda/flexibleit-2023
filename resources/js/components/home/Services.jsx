import React, { useEffect, useState } from 'react'
import { features } from '../../constants'
import styles from '../../style'
import Service from './Service'
import { Link } from 'react-router-dom'

const Services = () => {
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

  const featuredServices = services.filter((service) => service.featured === 1 )

  return (<>
    <div id="services" className='text-center py-24'>
      <h2 className={`${styles.heading2} mb-1`}>Grow your startup with our Service</h2>
      <p className={`${styles.paragraph} max-w-xl mx-auto`}>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>
      
    </div>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
      {featuredServices.map(feature=>{
        return (
        <div key={feature.id}>
          <Link to={`/services/${feature.id}`}>
            <Service service={feature} />
          </Link>
        </div>
        )
      })}
    </div>
    <div className="mt-8 mb-8 text-center">
      <Link to={`/all-services`}>
        <button className="bg-secondary text-white inline-block px-8 py-5 rounded-md">View All Services</button>
      </Link>
    </div>
    </>
  )
}

export default Services