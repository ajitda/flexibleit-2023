import React, { useState, useEffect } from 'react'
import {BsCheckLg,BsFacebook,BsTwitter,BsInstagram,BsLinkedin } from 'react-icons/bs'
import {FaCentercode, FaTelegramPlane} from "react-icons/fa"
import { GiShoppingCart } from "react-icons/gi"
import { TiHtml5 } from "react-icons/ti"
import { MdManageAccounts, MdSupportAgent } from "react-icons/md "
import { RiReactjsFill } from "react-icons/ri"
import { TbBugOff } from "react-icons/tb"
import Button from '../components/UI/Button'

const Home = () => {
    const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 168) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
})

  return (
    // <-- Body Start -->
    <div >
         {/* <!-- Spinner Start --> */}
         {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary w-6 h-6" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>  */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Navbar & Hero Start --> */}
         <div className="container-xxl p-0">           
        <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flexibleit.net/" class="flex items-center">
        <img src="./img/logo-1.png" class="h-6 mr-3 sm:h-9" alt="Flexible IT Logo"/>
  </a>
        <div class="flex md:order-2">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

            {/* <-- Hero Section Start --> */}
            <div className=" py-5 bg-blue-900 mb-5">
                <div className=" my-5 py-5 lg:px-5">
                    <div className="g-5 py-5 flex flex-wrap items-center justify-between mx-auto">
                        <div className="lg:w-1/2 text-center pt-6">
                            <h1 className="text-white mb-4 animated zoomIn">All in one Digital Solution need to grow your business rapidly</h1>
                            <p className="text-white pb-3 animated zoomIn ">Welcome to Flexible IT, your trusted partner for cutting-edge software solutions. We are a leading software development company dedicated to providing our clients with innovative and reliable digital solutions to help them achieve their business goals.

With 10 years of experience in the industry, our team of expert developers and designers specialize in creating customized software applications tailored to the specific needs of our clients. From web and mobile applications to enterprise software solutions, we offer a comprehensive range of services to help businesses streamline their operations and stay ahead of the competition.

At Flexible IT, we pride ourselves on delivering exceptional software products that meet the highest standards of quality and performance. Our solutions are designed to be user-friendly, scalable, and secure, ensuring that our clients get the most out of their investment.

So, whether you're a startup or a well-established business, we're here to help you take your digital journey to the next level. Contact us today to learn more about our services and how we can help you achieve your business objectives.</p>
                            {/* <a href="" className="button btn-light py-sm-3 px-sm-5 rounded-pill ">Free Tools</a> */}
                            <div className='mt-5'>
                            <Button text="Free Tools" link="" className='bg-white mr-3 pt-4 animated slideInLeft'/>
                            <Button text="Contact Us" link="" className='border hover:bg-white pt-4' />
                            </div>
                            {/* <a href="" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a> */}
                        </div>
                        <div className="col-lg-6 lg:w-1/2 text-center lg:text-start">
                            <img className="img-fluid" src="/img/hero.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <-- Hero Section End --> */}
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Full Screen Search Start --> */}
        <div className="modal fade" id="searchModal" tabindex="-1">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content bg-gray-500">
                    {/* <div className="modal-header border-0">
                        <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> */}
                    <div className="modal-body flex">
                        <div  className='input-group flex mx-auto w-max py-4'>
                            <input type="text" className="form-control bg-transparent text-sm w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2" placeholder="Type search keyword" />
                            <Button text="Search" link="" className='border hover:bg-white px-4' />
                            {/* <button className="btn btn-light px-4"><i className="bi bi-search"></i></button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Full Screen Search End --> */}

        {/* <!-- About Start --> */}
    
        <div className="py-5">
            <div className="container mx-auto lg:px-5">
                <div className="row g-5 flex flex-wrap items-center justify-between mx-auto">
                    <div className="col-lg-6 lg:w-1/2 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h6 className="position-relative text-sky-900 px-4">About Us</h6>
                            <h2 className="mt-2">The best Digital solution with 10 years of experience</h2>
                        </div>
                        <p className="mb-4">We pride ourselves on delivering exceptional software products that meet the highest standards of quality and performance. Our solutions are designed to be user-friendly, scalable, and secure, ensuring that our clients get the most out of their investment.</p>
                        <div className="row g-3 flex">
                            <div className="sm:w-1/2">
                                <h6 className="m-4 flex items-center"><BsCheckLg className='text-sky-900 mr-2'/> Award Winning</h6>
                                <h6 className="m-4 flex items-center"><BsCheckLg className='text-sky-900 mr-2'/> Professional Staff</h6>
                            </div>
                            <div className="sm:w-1/2">
                                <h6 className="m-4 flex items-center"><BsCheckLg className='text-sky-900 mr-2'/> 24/7 Support</h6>
                                <h6 className="m-4 flex items-center"><BsCheckLg className='text-sky-900 mr-2'/> Fair Prices</h6>
                            </div>
                        </div>
                        <div className="flex items-center mt-4 ">
                            {/* <a className="btn btn-primary rounded-pill px-4 ml-3" href="">Read More</a> */}
                            <Button text="Read More" link="" className='border bg-sky-500 text-white hover:bg-sky-900 pt-4'/>
                            <a className="ml-3" href=""> <BsFacebook className='w-9 h-7'/></a>
                            <a className="ml-3" href=""> <BsTwitter className='w-9 h-7'/></a>
                            <a className="ml-3" href=""> <BsInstagram className='w-9 h-7'/></a>
                            <a className="ml-3" href=""> <BsLinkedin className='w-9 h-7'/></a>
                        </div>
                    </div>
                    <div className="col-lg-6 lg:w-1/2">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="img/about.jpg"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Newsletter Start --> */}
        <div className="bg-sky-900 newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container mx-auto lg:px-5">
                <div className="row flex flex-wrap items-center h-36">
                    <div className=" md:w-1/2 justify-center">
                        <h3 className="text-white">Ready to get started</h3>
                        <small className="text-white">Diam elitr est dolore at sanctus nonumy.</small>
                        <div className="position-relative w-fit mt-3">
                            <input className="form-control border-0 rounded-pill w-96 ps-4 pr-5 h-12" type="text" placeholder="Enter Your Email"/>
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><FaTelegramPlane size={26}/></button>
                        </div>
                    </div>
                    <div className="col-md-6 md:w-1/2 text-center mb-5 hidden md:block"> 
                        <img className="img-fluid mt-5 h-36" src="img/newsletter.png"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Newsletter End --> */}

        {/* <!-- Service Start --> */}
        <div className="py-5 mt-9">
            <div className="container mx-auto lg:px-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative inline text-sky-900 pl-4">Our Services</h6>
                    <h2 className="mt-2">What Solutions We Provide</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                            <GiShoppingCart size={50}/>
                            </div>
                            <h5 className="mb-3">Ecommerce Solutions</h5>
                            <p>We offer ecommerce solutions for businesses looking to sell their products online. Our team of experts can help you set up your online store and integrate it with your existing systems.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <TiHtml5 size={50}/>
                            </div>
                            <h5 className="mb-3">Web Design & Development</h5>
                            <p>We create custom websites and web applications that are tailored to your specific business needs. Our designers and developers work together to ensure a seamless user experience that is both functional and visually appealing.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <MdManageAccounts size={50}/>
                            </div>
                            <h5 className="mb-2">Accounting & POS Software</h5>
                            <p className='text-xl'>We provide accounting software solutions to help you manage your finances more efficiently. Our software is easy to use and integrate with your existing systems. Our point-of-sale software solutions make it easy for businesses to manage sales and transactions. Our software is fast, reliable, and easy to use.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                            <RiReactjsFill size={50}/>
                            </div>
                            <h5 className="mb-3">Automation Software</h5>
                            <p>We develop automation software to streamline your business processes and save you time and money. Our solutions are custom-built to meet the unique requirements of your business.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <TbBugOff size={50}/>
                            </div>
                            <h5 className="mb-3">Bug Fixing Services & Data Migration</h5>
                            <p>Our team of experienced developers can help you fix any bugs in your website or web application. We provide fast and efficient solutions to get your site back up and running smoothly.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                            <MdSupportAgent size={50}/>
                            </div>
                            <h5 className="mb-3">Support & Maintenance</h5>
                            <p>We offer ongoing support and maintenance services to keep your website or web application running smoothly. Our team is available to help you with any issues you may encounter.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Service End --> */}

        {/* <!-- Portfolio Start --> */}
        <div className="py-5">
            <div className="container mx-auto lg:px-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Projects</h6>
                    <h2 className="mt-2">Recently Launched Projects</h2>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li className="btn px-3 pe-4 active" data-filter="*">All</li>
                            <li className="btn px-3 pe-4" data-filter=".first">Design</li>
                            <li className="btn px-3 pe-4" data-filter=".second">Development</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Portfolio End --> */}

        {/* <!-- Testimonial Start --> */}
        <div className="bg-sky-900 testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container mx-auto py-5 lg:px-5">
                <div className="grid grid-cols-4 gap-4 owl-carousel testimonial-carousel">
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle w-12 h-12" src="/img/testimonial-1.jpg"/>
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle w-12 h-12" src="img/testimonial-2.jpg"/>
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle w-12 h-12" src="img/testimonial-3.jpg"/>
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle w-12 h-12" src="img/testimonial-4.jpg"/>
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testimonial End --> */}

        {/* <!-- Footer Start --> */}
        <footer className="page-footer footer-img bg-image bg-black" style={{backgroundImage:"url('/img/footer.png')"}} > 
        {/* style="background-image: url('img/world_pattern.svg');" */}
            <div className="container mx-auto">
              <div className="grid grid-cols-4 mb-5">
                <div className="py-3">
                  <h3 className='text-white'>Flexible IT</h3>
                  <p className='text-sky-900'>Building your digital presence with precision and creativity.</p>
        
                  <div className="social-media-button">
                    <a href="#"><span><BsFacebook className='w-9 h-7'/></span></a>
                    <a href="#"><span className="mai-logo-twitter"></span></a>
                    <a href="#"><span className="mai-logo-google-plus-g"></span></a>
                    <a href="#"><span className="mai-logo-instagram"></span></a>
                    <a href="#"><span className="mai-logo-youtube"></span></a>
                  </div>
                </div>
                <div className="py-3">
                  <h5 className='text-white'>Company</h5>
                  <ul className="footer-menu text-sky-900">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Advertise</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Help & Support</a></li>
                  </ul>
                </div>
                <div className="py-3">
                  <h5 className='text-white'>Contact Us</h5>
                  <p className='text-sky-900'>203 Fake St. Mountain View, San Francisco, California, USA</p>
                  <a href="#" className="footer-link text-sky-900">+00 1122 3344 5566</a>
                  <a href="#" className="footer-link text-sky-900">seogram@temporary.com</a>
                </div>
                <div className="py-3">
                  <h5 className='text-white'>Newsletter</h5>
                  <p className='text-sky-900'>Get updates, news or events on your mail.</p>
                  <form action="#">
                    <input type="text" className="form-control" placeholder="Enter your email.."/>
                    <button type="submit" className="btn btn-success btn-block mt-2">Subscribe</button>
                  </form>
                </div>
              </div>
        
              <p className="text-center pb-2 text-white" id="copyright">Copyright &copy; 2019. This template design and develop by <a href="https://flexibleit.net/" target="_blank">Flexible IT</a></p>
            </div>
          </footer>
        {/* <!-- Footer End --> */}

    </div>
    // <-- Body End -->
  )
}

export default Home