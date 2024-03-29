import React from "react";
import styles from "../../style";

const Service = ({service}) => {
 const  {title, description, thumbnail} = service;

      let slicedDescription = description.slice(0, 40);
      if (description.length > 40) {
        slicedDescription += "...";
        }

   return (
      <div className='flex justify-content-between md:h-72 bg-gray-200 rounded-md py-20 px-12 before:block before:absolute before:h-full hover:scale-105'>
        <figure className='flex-grow md:w-20 md:mx-7 md:my-2 mx-5 my-10'><img src={thumbnail} alt="" /></figure>
        <div className=''>
          <h3 className='font-bold mb-3 text-[20px]'>{title}</h3>
          <p className={`${styles.paragraph}`}>{slicedDescription}</p>
        </div>
      </div>
   )
}
export default Service;