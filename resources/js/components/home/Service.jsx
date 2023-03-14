import React from "react";
import styles from "../../style";

const Service = ({service}) => {
   const {title, desc, image} = service;
   return (
      <div className='flex justify-content-between'>
        <figure className='flex-grow min-w-[88px] mr-7'><img src={image} alt="" /></figure>
        <div className=''>
          <h3 className='font-bold mb-3 text-[20px]'>{title}</h3>
          <p className={`${styles.paragraph}`}>{desc}</p>
        </div>
      </div>
   )
}
export default Service;