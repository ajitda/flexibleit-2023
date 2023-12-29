import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../../../style';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import { FaEye, FaInbox } from 'react-icons/fa';

export default function PortfolioDetails() {
  const { slug } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    getPortfolioDetails(slug);
  }, [slug]);

  const getPortfolioDetails = (slug) => {
    fetch(`/api/devsbrain/portfolios/${slug}`)
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          setPortfolio(data.data);
        }
      });
  }

  console.log('portfolio', portfolio);

  const openModal = (media) => {
    setSelectedImg(media.thumbnail);
    setIsDialogOpen(true);
  }

  const closeModal = () => {
    setSelectedImg(null);
    setIsDialogOpen(false);
  }

  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {portfolio ? (
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div>
          
          <div id="product" className=" md:p-24 p-5">
            <figure>
              <img className="rounded" src={portfolio.thumbnail} alt="" />
            </figure>
            {portfolio.media && portfolio.media.length > 0 ? (
              <div className="flex md:mr-96 mt-5 mb-5">
                {portfolio.media.map((image, index) => (
                  <img
                    key={index}
                    className="w-28 rounded mr-4 cursor-pointer"
                    src={image.thumbnail}
                    alt=""
                    onClick={() => openModal(image)}
                  />
                ))}
              </div>
            ) : (
              <p>No images available.</p>
            )}
          </div>
          </div>
          <div className='md:pt-24 p-5 mb-12'>
          <h2 className="">{portfolio.title}</h2>
          <div className=''>
            <h2 className={`${styles.heading2} `}>{portfolio.title}</h2>
          </div>
          <div>
            <p className=' font-medium'>Short description:</p>
            <p className={`${styles.paragraph} md:pr-28`}>{portfolio.description}</p>
          </div>
          <div className="flex mt-4">
            <Link to={`/contact-us`}>
              <button className="bg-black text-white inline-block px-4 py-2 rounded-md">
                <div className='flex'>
                  <div>Contact us</div>
                  <div className='ml-2 mt-1'><FaInbox /></div>
                </div>
              </button>
              
            </Link>
            <div>
            {portfolio.meta_data && portfolio.meta_data.length > 0 && (
              <div className='pl-2'>
                <ul>
                  {portfolio.meta_data.map((metaItem, index) => {
                    if (metaItem.meta_name === 'link') {
                      return (
                        <div key={index} className=' bg-sky-500 text-white inline-block px-4 py-2 rounded-md'>
                          <a href={metaItem.meta_value}>
                            <div className='flex'>
                              <div>Visit Now</div>
                              <div className='ml-2 mt-1'><FaEye /></div>
                            </div>
                          </a>
                        </div>
                      );
                    } else {
                      return null; // Or any other default content if needed
                    }
                  })}
                </ul>
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

      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 backdrop-blur-sm items-center justify-center bg-transparent"
          onClick={closeModal}
        >
          <Dialog
            size="sm"
            open={isDialogOpen}
            onClose={closeModal}
            className="flex items-center justify-center !shadow-none !bg-transparent"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogBody className="md:w-4/5 md:ml-80 md:mr-0 mr-7 md:mt-0 mt-60"> {/* Transparent background */}
              <img
                alt="Modal Image"
                className="rounded-lg top" // Small width
                src={selectedImg}
              />
            </DialogBody>
          </Dialog>
        </div>
      )}
    </div>
  );
}
