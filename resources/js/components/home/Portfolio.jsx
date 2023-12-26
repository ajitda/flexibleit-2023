import React from "react";
import styles from "../../style";

const Portfolio = ({portfolio}) => {
   const {thumbnail, title, description } = portfolio;

   let slicedTitle = title.slice(0, 32);
   let slicedDescription = description.slice(0, 25);
   if (description.length > 20, title.length > 10) {
   slicedDescription += "...";
   slicedTitle += "..";
   }

   return (
     
      <div id="product" className="m-2 relative before:block before:absolute before:w-full before:h-full before:bg-[rgba(0,0,0,0.1)] hover:scale-105 ">
         <figure>
            <img className=" rounded-lg" src={thumbnail} alt="" />
         </figure>
            <h2 className="absolute text-lg font-bold text-cyan-600 md:bottom-4 my-2 left-0 text-center md:p-8 md:leading-10 w-full">{slicedTitle}</h2>
            <p className={`${styles.paragraph} md:p-8 p-4 md:mt-1 mt-2 ml-12 md:text-center`}>{slicedDescription}</p>
      </div>
   )
}

export default Portfolio;