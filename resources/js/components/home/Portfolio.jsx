import React from "react";
import styles from "../../style";

const Portfolio = ({portfolio}) => {
   const {thumbnail, title, description } = portfolio;
   return (
     
      <div className="m-2 relative before:block before:absolute before:w-full before:h-full before:bg-[rgba(0,0,0,0.1)] hover:scale-105 ">
         <figure>
            <img className=" rounded-lg" src={thumbnail} alt="" />
         </figure>
            <h2 class="absolute text-lg font-bold text-white bottom-4 left-0 text-center px-3 w-full">{title}</h2>
            <p className={`${styles.paragraph}`}>{description}</p>
      </div>
   )
}

export default Portfolio;