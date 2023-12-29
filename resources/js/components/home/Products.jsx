import React from 'react';
import styles from '../../style';

export default function Products() {
  return (
    <div>
        <h1 className={`${styles.heading2} text-center`}>Here is our Products</h1>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <img src='/img/gallery/4.png' alt="" />
                <h1 className={`${styles.heading2}`}>E-manager</h1>
            </div>
            <div>
                <img src='/img/gallery/2.png' alt="" />
                <h1 className={`${styles.heading2}`}>Flex QR</h1>
            </div>
        </div>
    </div>
  )
}
