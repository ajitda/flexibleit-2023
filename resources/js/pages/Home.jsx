import React, { useState, useEffect } from 'react'
import {BsCheckLg,BsFacebook,BsTwitter,BsInstagram,BsLinkedin } from 'react-icons/bs'
import {FaCentercode, FaTelegramPlane} from "react-icons/fa"

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
            <nav className={` navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 shadow-sm fixed top-0 ${scrolling ? "bg-white sticky-top" : ""}`}>
                <a href="" className="navbar-brand p-0">
                     <img className='h-6' src="img/logo-1.png" alt="" />
                </a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="project.html" className="nav-item nav-link">Project</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <button type="button" className="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    <a href="https://htmlcodex.com/startup-company-website-template" className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Pro Version</a>
                </div>
            </nav>

            <div className="container-xxl py-5 bg-primary hero-header mb-5">
                <div className="container my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated zoomIn">All in one Digital Solution need to grow your business rapidly</h1>
                            <p className="text-white pb-3 animated zoomIn">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                            <a href="" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Free Quote</a>
                            <a href="" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className="img-fluid" src="img/hero.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Full Screen Search Start --> */}
        <div className="modal fade" id="searchModal" tabindex="-1">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content bg-gray-500">
                    <div className="modal-header border-0">
                        <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center justify-content-center">
                        <div  className='input-group w-max'>
                            <input type="text" className="form-control bg-transparent border-light p-3" placeholder="Type search keyword" />
                            <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Full Screen Search Start --> */}

        {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h6 className="position-relative text-primary ps-4">About Us</h6>
                            <h2 className="mt-2">The best Digital solution with 10 years of experience</h2>
                        </div>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <h6 className="mb-3"><BsCheckLg /> Award Winning</h6>
                                <h6 className="mb-0"><i className="text-primary me-2"></i> <BsCheckLg /> Professional Staff</h6>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="text-primary me-2"></i> <BsCheckLg /> 24/7 Support</h6>
                                <h6 className="mb-0"><i className="text-primary me-2"></i> <BsCheckLg /> Fair Prices</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-primary rounded-pill px-4 me-3" href="">Read More</a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""> <BsFacebook/> </a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""> <BsTwitter/> </a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""> <BsInstagram/> </a>
                            <a className="btn btn-outline-primary btn-square" href=""> <BsLinkedin/> </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="img/about.jpg"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About Start --> */}

        {/* <!-- Newsletter Start --> */}
        <div className="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container px-lg-5">
                <div className="row align-items-center h-36">
                    <div className="col-12 col-md-6">
                        <h3 className="text-white">Ready to get started</h3>
                        <small className="text-white">Diam elitr est dolore at sanctus nonumy.</small>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5 h-12" type="text" placeholder="Enter Your Email"/>
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><FaTelegramPlane size={26}/></button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img className="img-fluid mt-5 h-36" src="img/newsletter.png"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Newsletter End --> */}

        {/* <!-- Service Start --> */}
        <div className="container-xxl py-5 mt-37">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Services</h6>
                    <h2 className="mt-2">What Solutions We Provide</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">SEO Optimization</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Web Design</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Social Media Marketing</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Email Marketing</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">PPC Advertising</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">App Development</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Service End --> */}

        {/* <!-- Portfolio Start --> */}
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
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
                <div className="row g-4 portfolio-container">
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
        <div className="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="owl-carousel testimonial-carousel">
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
        <footer className="page-footer footer-img bg-image bg-dark" style={{backgroundImage:"url('/img/footer.png')"}} > 
        {/* style="background-image: url('img/world_pattern.svg');" */}
            <div className="container">
              <div className="row mb-5">
                <div className="col-lg-3 py-3">
                  <h3>SEOGram</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, repellendus eius blanditiis in iusto eligendi iure.</p>
        
                  <div className="social-media-button">
                    <a href="#"><span className="mai-logo-facebook-f"></span></a>
                    <a href="#"><span className="mai-logo-twitter"></span></a>
                    <a href="#"><span className="mai-logo-google-plus-g"></span></a>
                    <a href="#"><span className="mai-logo-instagram"></span></a>
                    <a href="#"><span className="mai-logo-youtube"></span></a>
                  </div>
                </div>
                <div className="col-lg-3 py-3">
                  <h5>Company</h5>
                  <ul className="footer-menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Advertise</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Help & Support</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 py-3">
                  <h5>Contact Us</h5>
                  <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                  <a href="#" className="footer-link">+00 1122 3344 5566</a>
                  <a href="#" className="footer-link">seogram@temporary.com</a>
                </div>
                <div className="col-lg-3 py-3">
                  <h5>Newsletter</h5>
                  <p>Get updates, news or events on your mail.</p>
                  <form action="#">
                    <input type="text" className="form-control" placeholder="Enter your email.."/>
                    <button type="submit" className="btn btn-success btn-block mt-2">Subscribe</button>
                  </form>
                </div>
              </div>
        
              <p className="text-center pb-2" id="copyright">Copyright &copy; 2019. This template design and develop by <a href="https://flexibleit.net/" target="_blank">Flexible IT</a></p>
            </div>
          </footer>
        {/* <!-- Footer End --> */}

    </div>
    // <-- Body End -->
  )
}

export default Home