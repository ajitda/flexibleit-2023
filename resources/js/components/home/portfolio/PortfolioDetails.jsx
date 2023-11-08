import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../../../style';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";

export default function PortfolioDetails() {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    getPortfolioDetails(id);
  }, [id]);

  const getPortfolioDetails = (id) => {
    fetch(`/api/portfolios/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          setPortfolio(data.data);
        }
      });
  }

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
        <div className='grid grid-cols-2'>
          <div>
          
          <div id="product" className=" p-24">
            <figure>
              <img className="rounded" src={portfolio.thumbnail} alt="" />
            </figure>
            {portfolio.media && portfolio.media.length > 0 ? (
              <div className="flex mr-96 mt-5 mb-5">
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
          <div className='pt-24'>
          <h2 className="">{portfolio.title}</h2>
          <div className=''>
            <h2 className={`${styles.heading2} `}>{portfolio.title}</h2>
          </div>
          <div>
            <p className=' font-medium'>Short description:</p>
            <p className={`${styles.paragraph}`}>{portfolio.description}</p>
          </div>
          <div className=" mt-4">
            <Link to={`/contact-us`}>
              <button className="bg-black text-white inline-block px-4 py-2 rounded-md">Contact us</button>
            </Link>
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
            <DialogBody className="" style={{width:'50rem',left:'15rem'}}> {/* Transparent background */}
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
