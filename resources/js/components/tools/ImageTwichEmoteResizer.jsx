import React from 'react';
import styles from '../../style';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import ImageResizer from './image-resizer/ImageResizer';

export default function ImageTwichEmoteResizer() {
  return (
    <div className='w-full font-b612'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
               <Navbar />
            <div className="mb-3 p-10">
                <div className='row'>
                    <h1 className={`${styles.heading2} text-center mb-8`}>Image Resizer tool to reduce twitch emotes</h1>
                    <div className="row mb-10">
                        <div className="md:flex">
                            <div className={`${styles.paragraph} md:m-auto md:flex-initial md:w-[45rem]`}>
                                <p className='text-center mb-5'>
                                    By utilizing our cutting-edge Image Resizer tool, it is now achievable to effortlessly reduce the size of your twitch emotes.
                                    With our user-friendly resizer tool, resizing your twitch images has never been easier or more convenient.
                                    Just by uploading your emotes, our tool enables you to view a myriad of diverse image sizes in just a few clicks.
                                </p>
                                <p className="text-center mb-5">
                                    Upon uploading your twitch emotes, you will be presented with a multitude of image sizes that you can peruse at your leisure.
                                    In order to download all of the resized images, simply click on the "Save All" button and they will be immediately available for you to use.
                                </p>
                                <p className="text-center mb-5">
                                    Our tool offers unrivaled ease-of-use and convenience when it comes to resizing your twitch emotes.
                                    So why wait? Upload your emotes today and start resizing!
                                </p>
                                <ul className='list-disc mx-9'>
                                    <li>Upload your twitch emotes, then you can see many sizes of your photos.</li>
                                    <li>You can download all resized images by clicking <span>Save All</span> button</li>
                                </ul>
                                
                            </div>
                            <div className='md:flex-initial '></div>
                        </div>
                    </div>
                    <div className=''>
                        <ImageResizer />
                    </div>
                </div>
            </div>
            <p className="text-center mb-5 mt-8 px-7">
                If you have any question or face any problem or if you have any feature request? Please <a href="/contact">Contact Us</a>
            </p>
            
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
