import React from 'react'
import { testimonials } from '../../constants'
import styles from '../../style'
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
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
    <div className='text-center py-24'>
    <h2 className={`${styles.heading2} mb-1`}>What Clients Say About US</h2>
      <p className={`${styles.paragraph} max-w-xl mx-auto`}>Customer Testimonial</p>
    </div>
    <div>
    <Swiper {...testimonialCarousel}>
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
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