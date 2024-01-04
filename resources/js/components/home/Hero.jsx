import styles from "../../style";
import { discount, herobanner, robot } from "../../assets";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Hero = () => {

  const [metaTags, setMetaTags] = useState({
    title: 'Custom Web Design and Development Solutions | DevsBrain',
    description: 'Are you looking to make your business more easier and easily manageable. We can provide your custom automation software or ecommerce website for making your business easier. We anlyze your business and can give you a nice solution',
    url: window.location.href ,
  });

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div>
        <Helmet>
          <meta name="title" content={metaTags.title} />
          <meta name="description" content={metaTags.description} />
          <meta property="og:title" content={metaTags.title} />
          <meta property="og:description" content={metaTags.description} />
          <meta property="og:image" content={metaTags.image} />
          <meta property="og:url" content={metaTags.url} />
          {/* Twitter meta tags */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={metaTags.title} />
          <meta name="twitter:description" content={metaTags.description} />
          {/* Canonical URL */}
          <link rel="canonical" href={window.location.href} />
        </Helmet>
    </div>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <div className=" w-full md:pt-12 pt-5 text-center">
          <h1 className="text-center mb-6 flex-1 font-bold md:leading-[72px] leading-8 ss:text-[32px] md:text-[52px] text-xl max-w-4xl mx-auto text-primary">
          Creativity starts with viewing the whole world differently
          </h1>
          <p className={`${styles.paragraph}`}>A service agency with customer satisfaction</p>
          <a href="/contact-us" className="text-white inline-block mt-10 bg-secondary px-10 py-5 rounded-md md:mb-0 mb-8">Get Started</a>
        </div>
        <div>
          <img src={herobanner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
