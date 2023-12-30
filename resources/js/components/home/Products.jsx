import React from 'react';
import styles from '../../style';

export default function Products() {
  return (
    <div>
        <h1 className={`${styles.heading2} text-center md:mb-8 mb-2 leading-10`}>Use our products to make easier your Business</h1>
        <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-slate-200 text-center'>
                <img src='/img/gallery/4.png' alt="" className='mb-5' />
                <h1 className='text-xl font-semibold'>e-Manager - a business management software</h1>
                <p className={`${styles.paragraph}`}>Create Invoice/Bill, Automated Report, Get Stock Report</p>
                <button className='bg-secondary text-white inline-block mt-2 mb-7 px-4 py-2 rounded-md'><a href="https://e-manager.org/">Visit Now</a></button>
            </div>
            <div className='bg-slate-200 text-center'>
                <img src='/img/gallery/2.png' alt="" className='mb-5' />
                <h1 className='text-xl font-semibold'>Free QR Code Generator - FlexQR</h1>
                <p className={`${styles.paragraph}`}>create QR for your website, information and company profile.</p>
                <button className='bg-secondary text-white inline-block mt-2 mb-7 px-4 py-2 rounded-md'><a href="https://qr.devsbrain.com/">Visit Now</a></button>
            </div>
        </div>
    </div>
  )
}
