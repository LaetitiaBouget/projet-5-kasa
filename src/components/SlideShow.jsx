import { useState } from "react";
import ArrowLeft from '../assets/images/arrow-left.png'
import ArrowRight from '../assets/images/arrow-right.png'

export default function SlideShow( {imageUrls}) {

const [imageIndex, setImageIndex] = useState(0)

function showPrevImage (){
  setImageIndex(index => {
    if (index === 0) return imageUrls.length - 1
    return index - 1
  })
}

function showNextImage (){
  setImageIndex(index => {
    if (index === imageUrls.length - 1) return 0
    return index + 1
  })
}

  return (
    <div className="slide-show__gallery">
      <img src ={imageUrls[imageIndex]} alt="Photo" className="slide-show__img"/>

      {imageUrls.length > 1 && (
        <>
        <button onClick={showPrevImage} className="slide-show__btn left"><img src={ArrowLeft} className="image-arrow"/></button>
        <button onClick={showNextImage} className="slide-show__btn right"><img src={ArrowRight} className="image-arrow"/></button>
        <p className="slide-show__index">{imageIndex+1}/{imageUrls.length}</p>
        </>
      )}
    </div>
  )
}


