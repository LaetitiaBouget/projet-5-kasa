import { useParams } from "react-router-dom";
import { accommodations } from "../assets/dataAccommodations";

export default function AccommodationGallery() {

const {id} = useParams();
const accommodation = accommodations.find(acc => acc.id === id);

  return (
    <div className="slide-show__gallery">
      {accommodation.pictures.map((picture, index) => (
        <img key={index} src={picture} alt={`${accommodation.title} - ${index + 1}`} />
      ))}
    </div>
  )
}
