import styles from "../../style";
import { discount, herobanner, robot } from "../../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <div className=" w-full pt-12 text-center">
          <h1 className="text-center mb-6 flex-1 font-bold leading-[72px] ss:text-[32px] md:text-[52px] max-w-4xl mx-auto text-primary">
          Creativity starts with viewing the whole world differently
          </h1>
          <p className={`${styles.paragraph}`}>A service agency with customer satisfaction</p>
          <a href="/contact-us" className="text-white inline-block mt-10 bg-secondary px-10 py-5 rounded-md">Get Started</a>
        </div>
        <div>
          <img src={herobanner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
