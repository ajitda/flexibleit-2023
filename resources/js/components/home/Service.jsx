import React from "react";
import styles from "../../style";

const Service = ({service}) => {
 const  {title, description, thumbnail} = service;

      let slicedDescription = description.slice(0, 60);
      if (description.length > 25) {
        slicedDescription += "...";
        }

   return (
      <div className='flex justify-content-between'>
        <figure className='flex-grow min-w-[88px] mr-7'><img src={thumbnail} alt="" /></figure>
        <div className=''>
          <h3 className='font-bold mb-3 text-[20px]'>{title}</h3>
          <p className={`${styles.paragraph}`}>{slicedDescription}</p>
        </div>
      </div>
   )
}
export default Service;