import React, { useState, useRef } from 'react';
import { readFile } from './file-helpers';
import { useDropzone } from 'react-dropzone';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function ImageResizer() {
  const [resizedImages, setResizedImages] = useState([]);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [customSize, setCustomSize] = useState(false);
  const [imgType, setImgType] = useState();
  const [mainImages, setMainImages] = useState([]);
  const fileInputRef = useRef(null);

  const getFileName = (file) => {
    const fileNameArr = file.name.split('.');
    const extn = imgType ? imgType : fileNameArr[fileNameArr.length - 1];
    return fileNameArr[0] + '_resized.' + extn;
  };

  const resizeImages = async () => {
    const images = [...fileInputRef.current.files];
    const newResizedImages = [];

    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      const dataURL = await readFile(file);
      const image = new Image();
      image.src = dataURL;

      await new Promise((resolve) => {
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          const fwidth = width ? width : image.naturalWidth / 2;
          const fheight = height ? height : image.naturalHeight / 2;
          canvas.width = fwidth;
          canvas.height = fheight;
          context.drawImage(image, 0, 0, fwidth, fheight);
          const resizedDataURL = canvas.toDataURL(file.type);
          const byteString = atob(resizedDataURL.split(',')[1]);
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i += 1) {
            ia[i] = byteString.charCodeAt(i);
          }
          const resizedBlob = new Blob([ab], { type: file.type });
          const size = resizedBlob.size / 1024;
          newResizedImages.push({
            dataURL: resizedDataURL,
            ratio: fwidth + ' x ' + fheight,
            name: getFileName(file),
            size,
          });
          resolve();
        };
      });
    }
    setResizedImages(newResizedImages);
  };

  const handleDrop = (acceptedFiles) => {
    const files = acceptedFiles;
    fileInputRef.current = { files };
    const newMainImages = mainImages.concat(
      Array.from(files).map((file) => URL.createObjectURL(file))
    );
    setMainImages(newMainImages);
  };

  const handleResize = () => {
    resizeImages();
  };

  const handleDownload = () => {
    const zip = new JSZip();

    resizedImages.forEach((image, index) => {
      const imgData = image.dataURL.split(',')[1];
      const fileName = `image_${index + 1}.${image.name.split('.').pop()}`;
      zip.file(fileName, imgData, { base64: true });
    });

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'resized_images.zip');
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  return (
    <div className="image-resizer-container p-4">
      <div
        {...getRootProps()}
        className="dropzone-container border border-dashed border-gray-400 rounded-md md:p-24 text-center md:h-0 h-40"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p className="md:mt-0 mt-12 mx-2">Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      <div className="main-images grid grid-cols-6 justify-center gap-3 mt-5">
        {mainImages.map((image, index) => (
          <img key={index} src={image} alt={`Main Image ${index + 1}`} className="my-4 rounded-md shadow-md w-40" />
        ))}
      </div>

      <div className="flex justify-between my-3">
        <div>
          {customSize ? (
            <div className="controls-container">
              <label>Set Custom <span className="font-medium">Width:</span></label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="border border-gray-300 rounded-md p-1 ml-1 mb-3"
              />
              <div className="lg:pl-20">
                <label className="font-medium">Height:</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="border border-gray-300 rounded-md p-1 ml-1"
                />
              </div>
              <div className="mt-2 md:pl-64">
                <button onClick={handleResize} className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600">
                  Resize
                </button>
              </div>
            </div>
          ) : (
            <a href="#" onClick={() => setCustomSize(true)} className="text-blue-500">
              Set custom size
            </a>
          )}
        </div>
        <div className="md:ml-28 ml-2">
          Image type
          <select
            onChange={(e) => setImgType(e.target.value)}
            className="border border-gray-300 rounded-md md:p-1 ml-1"
          >
            <option value="">default</option>
            <option value="jpg">jpg</option>
            <option value="png">png</option>
            <option value="webp">webp</option>
          </select>
        </div>
      </div>

      {resizedImages.length > 0 && (
        <div className="flex justify-center md:mt-10 mt-8 mb-10">
        <button onClick={handleDownload} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Download Zip
        </button>
      </div>
      )}

      {resizedImages.length > 0 && (
        <div className="grid md:grid-cols-6 grid-cols-4 gap-3 resized-images">
          {resizedImages.map((image, index) => (
            <div key={index} className="resized-image">
              <div className="">
                <img src={image.dataURL} alt={`Resized Image ${index + 1}`} className="my-4 rounded-md shadow-md" />
              </div>
              <div className="">
                <p>{image.size.toFixed(2)}KB</p>
                <p>Size: {image.ratio}</p>
              </div>
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
}
