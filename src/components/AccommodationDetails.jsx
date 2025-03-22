import { useParams } from "react-router-dom";
import { accommodations } from "../assets/dataAccommodations";
import SlideShow from "./SlideShow";

export default function AccommodationDetails() {

const {id} = useParams();
const accommodation = accommodations.find(acc => acc.id === id);

  return (
    <div className="accommodation_container">

      <div className="slide-show__gallery">
        <SlideShow imageUrls = {accommodation.pictures} />
      </div>

      <div>
      <p>{accommodation.title}</p>
        <div>
          <p>{accommodation.host.name}</p>
          <img
            src={accommodation.host.picture}
            alt ={accommodation.host.name}
          />
        </div>
      </div>

      <p>{accommodation.location}</p>

      <div>
        <p>{accommodation.rating}</p>
        <p>{accommodation.tags}</p>
      </div>

    </div>
  )
}
