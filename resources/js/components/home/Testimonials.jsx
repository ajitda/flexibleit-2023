import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import { testimonials } from '../../constants'
import styles from '../../style'
import TestimonialsCard from './TestimonialsCard'
import 'swiper/css';

SwiperCore.use([Autoplay]);

const Testimonials = () => {
  const [testimonials, setTestomonials] = useState();

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
        // console.log('allTestimonials', allTestimonials)
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
    <>
    
    <div id='clients' className='text-center py-10'>
    <h2 className={`${styles.heading2} mb-1`}>What Clients Say About US</h2>
    <p className={`${styles.paragraph} max-w-xl mx-auto`}>Customer Testimonial</p>
    </div>
    <div>
    <Swiper {...testimonialCarousel}>
        {testimonials?.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ thumbnail, description, author_name, designation }, _index) => (
              <TestimonialsCard
                thumbnail={thumbnail}
                description={description}
                author_name={author_name}
                key={_index}
                desigantion={designation}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  )
}

export default Testimonials