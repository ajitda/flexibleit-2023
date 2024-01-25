import React, { useRef, useState } from "react";
import { fabric } from "fabric";
import { useDropzone } from 'react-dropzone';
import styles from "../../../style";

const SvgConverter = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [convertedImage, setConvertedImage] = useState("");
  const [imgFile, setImgFile] = useState();
  const svgcanvasRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImgFile(file)
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImgFile(file)
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const convertToSvg = () => {
    const canvas = new fabric.Canvas("canvas");
    fabric.Image.fromURL(imageSrc, (img) => {
      canvas.add(img);
      setConvertedImage(canvas.toSVG());
    });
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="mb-8">
      <h2 className={`${styles.heading2} text-center`}>Convert Image to SVG</h2>
      <div className=" xl:max-w-screen-xl px-5">
      <div {...getRootProps()} className="border-dashed border-2 border-gray-400 rounded-lg p-8 text-center h-52">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop file here, or click to select file</p>
        )}
        {imgFile && (
          <p className='text-center text-blue-600'>{imgFile.name+' selected'}<br/> <b>Click the below button for converting</b></p>
        )}
      </div>
      </div>
      <div className=" pl-5">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 px-6 rounded mt-4" onClick={convertToSvg}>Convert to SVG</button>
      </div>
      <br />
      {imageSrc && (
        <div className="converter-img mt-2 md:ml-56">
          {/* <canvas style={{display: "none"}} ref={svgcanvasRef} id="canvas"  />
          <img style={{display: "none"}}
              src={imageSrc}
              onLoad={(event) => {
                const canvas = svgcanvasRef.current;
                const ctx = canvas.getContext("2d");
                canvas.width = event.target.naturalWidth;
                canvas.height = event.target.naturalHeight;
                ctx.drawImage(event.target, 0, 0);
              }}
            /> */}
          {convertedImage && (
            <a
              className="bg-green-600 hover:bg-green-600 text-white font-bold py-5 px-4 xl:w-1/3 md:w-1/2 w-96 md:ml-0 ml-3 rounded block"
              download="converted.svg"
              href={`data:image/svg+xml;utf8,${encodeURIComponent(convertedImage)}`}
            >
              Converted Image is Ready ! Click here to Download Converted SVG
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default SvgConverter;
