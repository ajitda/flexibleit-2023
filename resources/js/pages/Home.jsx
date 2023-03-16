import { Blogs, Clients, Cta, Footer, Hero, Navbar, Portfolios, Services, Testimonials } from "../components";
import styles from "../style";

const Home = () => {
   return (<div className=" w-full overflow-hidden font-b612">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
            <Navbar />
         </div>
      </div>

      <div className={` ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
            <Hero />
         </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexCenter} bg-[#fffaf6]`}>
         <div className={`${styles.boxWidth}`}>
            <Services />
         </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
            <Portfolios />
         </div>
      </div>
      <div className={` ${styles.flexCenter} bg-gray-100 my-12`}>
         <div className={`${styles.boxWidth}`}>
            <Testimonials />
         </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
            {/* <Clients /> */}
            <div className={`  ${styles.flexCenter}`}>
               <div className={`${styles.boxWidth}`}>
                  <Blogs />
               </div>
            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter} my-10`} style={{ backgroundImage: 'url(/img/subscribe-bg.png)'}}>
         <div className={`${styles.boxWidth}`}>
            <Cta />
            </div>
            </div>
            <Footer />
         </div>
      </div>
   </div>);
}

export default Home;