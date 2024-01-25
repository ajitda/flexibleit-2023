import React, { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import jsPDF from "jspdf";
import styles from '../../../style';
import Navbar from '../../home/Navbar';
import Footer from '../../home/Footer';
import SvgConverter from './SvgConverter';

const ImgConverter = () => {
  const [image, setImage] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [imgFormat, setImgFormat] = useState(null);
  const canvasRef = useRef(null);
  const pdfcanvasRef = useRef(null);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file);
    setImage(file);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleConvert = (format) => {
    if (!image) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    setImgFormat(format);
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      setConvertedImage(canvas.toDataURL(`image/${format}`));
    };
    img.src = URL.createObjectURL(image);
  };

  const convertToPDF = () => {
    const canvas = pdfcanvasRef.current;
    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const mode = canvas.width > canvas.height ? 'landscape' : 'portrait';
    const pdf = new jsPDF(mode, "pt", [canvas.width, canvas.height]);
    pdf.addImage(imgData, "JPEG", 0, 0);
    pdf.save("converted-image.pdf");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (<div className='w-full font-b612'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar />
            <div class="mb-3">
                <h1 class={`${styles.heading2} text-center mt-10`}>Image Converter tool</h1>
                <div class="flex justify-center">
                    <div class={`${styles.paragraph} md:w-1/2 w-80`}>
                        <p class="text-center">In many aspects we need to convert our images. This free Image converter tool helps you to convert image to jpg, png, webp, pdf format. Here is the simple process.</p>
                        <ul className='list-disc ml-5 pl-5 pt-5'>
                            <li>Select image format that you want to convert then upload Upload your image.</li>
                            <li>You can download the converted image by clicking <span>Download</span> button</li>
                        </ul>
                    </div>
                </div>
                <div className=" mx-auto mt-5">
                <div className='flex justify-center'>
                    <div className="w-full max-w-4xl">
                    <div {...getRootProps()} className="border-dashed border-2 border-gray-400 rounded-lg p-8 text-center h-52">
                        <input {...getInputProps()} />
                        {isDragActive ? (
                        <p>Drop the files here ...</p>
                        ) : (
                        <p>Drag 'n' drop file here, or click to select file</p>
                        )}
                        {image && (
                        <p className='text-center text-blue-600'><span className=''>{image.name + ' selected'}</span><br/> <b>Click the below button for converting</b></p>
                        )}
                    </div>
                    {image && (
                        <>
                        <canvas style={{ display: 'none' }} ref={pdfcanvasRef} />
                        <img
                            style={{ display: 'none' }}
                            src={URL.createObjectURL(image)}
                            onLoad={(event) => {
                            const canvas = pdfcanvasRef.current;
                            const ctx = canvas.getContext('2d');
                            canvas.width = event.target.naturalWidth;
                            canvas.height = event.target.naturalHeight;
                            ctx.drawImage(event.target, 0, 0);
                            }}
                        />
                        </>
                    )}
                    <div className='grid md:grid-cols-5 grid-cols-2 justify-center gap-3 md:px-20 ml-2 mt-4'>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2' onClick={() => handleConvert('jpg')}>Convert to JPG</button>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2' onClick={() => handleConvert('png')}>Convert to PNG</button>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2' onClick={() => handleConvert('webp')}>Convert to WEBP</button>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2' onClick={() => handleConvert('gif')}>Convert to GIF</button>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded md:mr-0 mr-2' onClick={convertToPDF}>Convert to PDF</button>
                    </div>
                    </div>
                </div>
                <div className='h-80 flex justify-center mt-8'>
                    <canvas ref={canvasRef} className='' />
                </div>
                {convertedImage && (
                    <div className='text-center my-10'>
                    <a className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded' download={`converted-image.${imgFormat}`} href={convertedImage}>
                        Download
                    </a>
                    </div>
                )}
                </div>
                <div>
                    <SvgConverter />
                </div>
            </div>
        </div>
    </div>
    <p class="text-center my-5">If you have any question or face any problem or if you have any feature request? Please <a href="/contact-us" className=' text-cyan-600'>Contact Us</a></p>
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Footer />
        </div>
    </div>
  </div>);
};

export default ImgConverter;
