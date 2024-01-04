import React, { useState } from 'react';
import { readFile } from './file-helpers';
import { useDropzone } from 'react-dropzone';

export default function ImageResizer() {

    const [resizedImage, setResizedImage] = useState(null);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [customSize, setCustomSize] = useState(false);
    const [imgType, setImgType] = useState();

    const getFileName = (file) => {
        const fileNameArr = file.name.split('.');
        console.log(fileNameArr);
        const extn = imgType ? imgType : fileNameArr[fileNameArr.length - 1];
        return fileNameArr[0]+'_resized.'+extn;
      if (file.type.includes('png')) return 'png';
      if (file.type.includes('jpg') || type.includes('jpeg')) return 'jpg';
    }
  
    const onDrop = async (acceptedFiles) => {
      const file = acceptedFiles[0];
      console.log(file);
      const dataURL = await readFile(file);
      const image = new Image();
      image.src = dataURL;
  
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const fwidth = width ? width : image.naturalWidth/2;
        const fheight = height ? height : image.naturalHeight/2;
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
        const size = resizedBlob.size / 1024 ;
        setResizedImage({ dataURL: resizedDataURL, ratio: fwidth+' x '+fheight, name: getFileName(file), size });
      };
    };
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="image-resizer-container p-4">
      <div {...getRootProps()} className="dropzone-container border border-dashed border-gray-400 rounded-md md:p-24 text-center md:h-0 h-40">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p className='md:mt-0 mt-12'>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div className="flex justify-between my-3">
        <div>
          {customSize ? (
            <div className="controls-container">
              <label>Set Custom <span className='font-medium'>Width:</span></label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="border border-gray-300 rounded-md p-1 ml-1 mb-3"
              />
              <div className='lg:pl-20'>
                <label className='font-medium'>Height:</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="border border-gray-300 rounded-md p-1 ml-1"
                />
              </div>
            </div>
          ) : (
            <a href="#" onClick={() => setCustomSize(true)} className="text-blue-500">
              Set custom size
            </a>
          )}
        </div>
        <div  className='md:ml-28'>
          Image type
          <select onChange={(e) => setImgType(e.target.value)} className="border border-gray-300 rounded-md p-1 md:ml-1">
            <option value="">default</option>
            <option value="jpg">jpg</option>
            <option value="png">png</option>
            <option value="webp">webp</option>
          </select>
        </div>
      </div>

      {resizedImage && (
        <div className="resized-image">
          <img src={resizedImage.dataURL} alt="Resized Image" className="my-4 rounded-md shadow-md" />
          <div className="flex justify-between items-center">
            <p>{resizedImage.size.toFixed(2)}KB</p>
            <p>Size: {resizedImage.ratio}</p>
            <a href={resizedImage.dataURL} download={resizedImage.name} className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600">
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
