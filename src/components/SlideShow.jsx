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

if (imageUrls.length < 2) {

  return <div><img src ={imageUrls[imageIndex]}/></div>
}

  return (
    <div>
      <img src ={imageUrls[imageIndex]}/>
      <button onClick={showPrevImage}><img src={ArrowLeft}/></button>
      <button onClick={showNextImage}><img src={ArrowRight}/></button>
      <div>
        <p>{imageIndex+1}/{imageUrls.length}</p>
      </div>
    </div>
  )
}

