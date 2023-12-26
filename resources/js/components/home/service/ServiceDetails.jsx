import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from '../../../style';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function ServiceDetails() {

    const { id } = useParams();
    const [service, setService] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const toggleDropdown = () =>{
      setShowDropdown(!showDropdown);
    }

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
            <div className="flex mt-4">
              <div>
                <Link to={`/contact-us`}>
                  <button className="bg-black text-white inline-block px-4 py-2 rounded-md">Contact us</button>
                </Link>
              </div>
              <div className='ml-5'>
                <button onClick={toggleDropdown} className='text-white bg-blue-700 hover:bg-blue-800 inline-block px-4 py-2 rounded-md'>
                  <div className='flex'>
                    <div>
                      Portfolios
                    </div>
                    <div>
                      <svg class="w-2.5 h-2.5 my-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </div>
                  </div>
                  </button>
                {showDropdown && (
                    <div className="absolute bg-white mt-2 p-2 rounded-md shadow-md">
                        <Link to="/contact-option-1" className="block py-2">
                            Contact Option 1
                        </Link>
                        <Link to="/contact-option-2" className="block py-2">
                            Contact Option 2
                        </Link>
                    </div>
                )}
              </div>
              
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
