import React, { useEffect, useState } from "react";
import Overlay from "./Overlay";


//MAIN LIGHTBOX
function ImageGallery(props) {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [images, setImages] = useState(props.images);
  // const images = props.images;
  // console.log(props.images);
  useEffect(()=>{
    // let medias = [];
    // if (props.images.length > 0) {
    //     // console.log(review.media);
    //     props.images.map(amedia=>{
    //         // <img src={media.image} alt="" />
    //         medias.push(amedia.image);
    //     })
    //     setImages(medias);
    // }
  }, [])

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
    // console.log(document.body.scrollHeight);
    // window.scrollTo(0, 200);
    document.body.classList.add('modal-open');
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
    document.body.classList.remove('modal-open');
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      // setLightBoxDisplay(false);
      // document.body.classList.remove('modal-open');
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      // setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
  

  if (!props.images) {
    return <></>;
  }
  //looping through our images array to create img elements
  let imageCards = '';
  if (images && images.length > 0) {
    imageCards = images.map((image, index) => {
      if (image?.format == 'video') {
        return <iframe key={"vid"+index} src={image.video} class="embed-responsive-item" width="60" frameborder="0" height="60" ></iframe>;
      } else {
        return <div className="col-md-3"><img key={"img"+index} className="img-fluid mb-3" onClick={() => showImage(image)} src={image} /></div>
      }
    }
    );
  }

  let imageToShowDiv = '';
  if (imageToShow) {
    if (imageToShow.format == 'video') {
      imageToShowDiv = <div class="embed-responsive embed-responsive-16by9">
      <iframe src={imageToShow.video} class="embed-responsive-item" width="100%" frameborder="0" height="400" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>;
    } else {
      imageToShowDiv = <img src={imageToShow} alt=""></img>
    }
  }

  return (
    <>
      <div className="row">{imageCards}</div>
      
      {
        lightboxDisplay ? 
        <Overlay>
          <div id="lightbox" onClick={hideLightBox}>
          <div className="navigation"><a onClick={showPrev}><i className="fas fa-angle-left"></i></a></div>
          <div id="lightbox-img" >
            {imageToShowDiv}
          </div>
          <div className="navigation"><a onClick={showNext}><i className="fas fa-angle-right"></i></a></div>
        </div>
        </Overlay>
       : ""
      }
    </>
  );
}

export default ImageGallery;