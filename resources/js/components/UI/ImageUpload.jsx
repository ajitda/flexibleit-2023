import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { generateVideoThumbnails } from "@rajesh896/video-thumbnails-generator";

const Box = ({ handleDrag, handleDrop, boxNumber, children }) => {
    return (
      <div
        draggable={true}
        id={boxNumber}
        onDragOver={(ev) => ev.preventDefault()}
        onDragStart={handleDrag}
        onDrop={handleDrop}
      >
        {children}
      </div>
    );
};

const ImageUpload = ({value,onChange}) => {
    const [dragIndex, setDragIndex] = useState();
    const [medias, setMedias] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(()=> {
	// setMedias(value);
	const t = value?.map((m) => {
	   return getThumbnail(m);
	});
	Promise.all(t).then((v) => {
	   setThumbnails(v);
	   setMedias(value);
	});
    }, [value]);

    const handleDrag = (ev) => {
        setDragIndex(ev.currentTarget.id);
    };
    
    const handleDrop = (ev) => {
        const dropIndex = ev.currentTarget.id;
        const dragBox = medias.find((box, i) => i === parseInt(dragIndex));
        const dropBox = medias.find((box, j) => j === parseInt(dropIndex));
        
        let newBoxState = [...medias];
        newBoxState[dragIndex] = dropBox
        newBoxState[dropIndex] = dragBox
       
        //setMedias(newBoxState);
	onChange(newBoxState);
    };

    const handleDelete = (i) => {
	//setMedias(medias.filter((m,j) => j != i));
	onChange(medias.filter((m,j) => j !=i ));
    };

    const handleFileChange = (e) => {
        const target = e.target;
        let value = target.files[0];
	target.value = ''; // needs to be cleared for reselecting the same file
	onChange([...medias,value]);
    };

    const getThumbnail = async (obj) => {
	const ei = medias.findIndex((m) => m === obj) ;
	if ( ei >= 0 ) {
	   // returning caches
	   return thumbnails[ei];
	} else if ( obj instanceof File ) {
           if ( obj.type.includes('video') ) {
              const thumbs = await generateVideoThumbnails(obj, 0).then((thumbs) => thumbs);
              return thumbs[0] ;
	   } else {
              return URL.createObjectURL(obj);
	   }
	} else {
           return obj.thumbnail;
	}
    };

    return (
        <>
        {thumbnails?.map((pmedia, i) => (
            <Box
            key={'rev-med' + i}
            boxNumber={i}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          >
            <div className="media-upload pe-2 pb-2">
                <div className="upload-btn preview p-0">
                    <img src={pmedia} className=" d-inline-block w-100 h-100" name="media" alt="" />
                </div>
                <div className="media-delete" onClick={()=>handleDelete(i)}><RiDeleteBin5Line /></div>
            </div>
            </Box>
        ))}
        <label className="inline-flex flex justify-center items-center upload-btn">
            <div className="">
                <p className='text-4xl'> + </p>
                <span className="text-14 pt-2 block">Upload</span>
            </div>
            <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        </>
    )
}

export default ImageUpload;

