import React from 'react';
import styles from '../../style';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import ImageResizer from './image-resizer/ImageResizer';

export default function ImageTwichEmoteResizer() {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
               <Navbar />
            </div>
         </div>
        <div className="mb-3 p-10">
            <h1 className="text-center text-5xl font-semibold mb-8 md:ml-28">Image Resizer tool to reduce twitch emotes</h1>
            <div className="row">
                <div className="md:flex">
                    <div className='md:flex-none w-80'></div>
                    <div className='md:ml-28 md:flex-initial md:w-7/12'>
                        <p className="text-center mb-5">
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
                        <div>
                            <ImageResizer />
                        </div>
                    </div>
                    <div className='md:flex-initial md:w-96'></div>
                </div>
            </div>

            

            <p className="text-center mb-5 mt-8 md:ml-32">
                If you have any question or face any problem or if you have any feature request? Please <a href="/contact">Contact Us</a>
            </p>
        </div>
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
  )
}
