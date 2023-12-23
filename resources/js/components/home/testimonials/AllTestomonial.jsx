import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import { testimonials } from '../../../constants'
import TestimonialsCard from '../TestimonialsCard'
import 'swiper/css';
import styles from '../../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Masonry from 'react-responsive-masonry'

SwiperCore.use([Autoplay]);


export default function AllTestomonial() {

    const [testimonials, setTestomonials] = useState([]);

  useEffect(()=>{
    getTestomonials();
 }, []);

 const getTestomonials = () => {
    fetch('/api/testomonials')
      .then(response => response.json())
      .then(data => {
       console.log('posts res ', data)
      //  setTestomonials(data.data);
      const resdata = data.data;

       const allTestimonials = [];
       
       const chunkSize = 1;
        for (let i = 0; i < resdata.length; i += chunkSize) {
            const chunk = resdata.slice(i, i + chunkSize);
            // do whatever
            allTestimonials.push(chunk);
        }
        console.log('allTestimonials', allTestimonials)
        setTestomonials(allTestimonials)
      });
 }
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  }

  return (
    <div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
          </div>
        </div>
        
        <div className='text-center -mb-10'>
            <h2 className={`${styles.heading2} mb-1`}>All Testimonials</h2>
        </div>

        <div className='p-20'>
          <Masonry>
        {testimonials?.map((item, index) => (
        <div key={index} className="">
          {item.map(({ thumbnail, description, author_name, designation }, _index) => (
            <TestimonialsCard
              thumbnail={thumbnail}
              description={description}
              author_name={author_name}
              key={_index}
              designation={designation} // Fix the typo in 'designation'
            />
          ))}
        </div>
        ))}
        </Masonry>
        </div>

        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Footer />
          </div>
        </div>

    </div>
  )
}
