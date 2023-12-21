import React from 'react';
import styles from '../style';
import Footer from './home/Footer';
import Navbar from './home/Navbar';

export default function About() {
  return (
    <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
               <Navbar />
            </div>
         </div>
         <div className=' text-center pt-20'>
            <h2 className='text-4xl'>About Us</h2>
         </div>
        <div className="flex-team-area p-16 pl-56">
        <div className="container">
            <div className="row mb-6">
            <div className="col-lg-12">
                <h2 className="mb-4 text-3xl font-bold">About Flexible IT</h2>

                    <p className="text-lg">Flexible IT is a leading web design and development company that offers a range of solutions for businesses looking to establish or improve their online presence. Our team of experienced developers is dedicated to creating custom websites, web applications, and ecommerce solutions that are both functional and visually appealing.</p>

                    <p className="text-lg">We understand that every business is unique, which is why we take a custom approach to each project. Our team works closely with you to understand your business needs and develop a solution that is tailored to your specific requirements.</p>

                    <p className="text-lg">Our goal is to help businesses succeed online by providing them with high-quality solutions that are both affordable and scalable. We use the latest technologies to ensure that your website or web application is fast, reliable, and secure, and we provide ongoing support and maintenance services to keep it running smoothly.</p>

                    <p className="text-lg">At Flexible IT, our team is our greatest asset. Our developers have years of experience in web design and development, and they are committed to providing high-quality solutions that meet your business needs.</p>
            </div>
            </div>

            {/* <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                <h2 className="title wow" data-splitting>Meet Our Team</h2> */}
                {/* <p className="subtitle-2 wow" data-splitting>We are providing best quality web design and development services for you. We are commited to get you best output.</p> */}
                {/* </div>
            </div>
            </div> */}
            {/* <div className="row mb-6">
            {employees.map((employee, index) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                <div className="flex-team single-team">
                    <div className="inner">
                    <div className="thumbnail paralax-image" style={{ willChange: 'transform', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' }}>
                        <img className="w-100" src={employee.picture} alt="Team Images" />
                    </div>
                    <div className="content p-3">
                        <h5 className="title mt-3">{employee.name}</h5>
                        <p className="subtitle">{employee.designation}</p>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div> */}

            <div className="row mb-6">
            <div className="col-md-12">
                <h3 className='mb-4 text-3xl font-bold'>Our Culture</h3>

                    <p className='text-lg'>At Flexible IT, we are committed to providing excellent customer service and delivering high-quality solutions. We believe in working closely with our customers to understand their needs and provide them with the best possible solution. Our team is passionate about technology and is always learning and experimenting with new tools and techniques to stay ahead of the curve.</p>

                    <p class="mb-6 text-lg">We are proud of the work we do and the impact it has on our customers' businesses. We believe that every project is an opportunity to make a difference, and we approach each one with that in mind.</p>

                <h3 className='mb-4 text-3xl font-bold'>Contact Us</h3>

                <p className='text-lg'>If you're looking to establish or improve your online presence, contact us today to learn how we can help. Our team is available to answer any questions you may have and provide a free quote for your project.</p>
            </div>
            </div>
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
