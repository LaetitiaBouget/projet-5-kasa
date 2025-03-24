import { useParams, Navigate } from "react-router-dom";
import { accommodations } from "../assets/dataAccommodations";
import SlideShow from "./SlideShow";
import StarRating from "./Rating";
import DescriptionInfoBox from "./AccommodationDescription";
import EquipmentsInfoBox from "./AccommodationEquipments";

export default function AccommodationDetails() {

const {id} = useParams();
const accommodation = accommodations.find(acc => acc.id === id);

if (!accommodation) {
  return <Navigate to="/not-found" replace />
}

const [firstName, lastName] = accommodation.host.name.split(' ');

  return (
    <div className="accommodation_container">

      <div className="slide-show__container">
        <SlideShow imageUrls = {accommodation.pictures} />
      </div>

      <div className ="accommodation__summary">
        <div className ="accommodation__summary__location">
          <p className="accommodation__title">{accommodation.title}</p>
          <p className="accommodation__location">{accommodation.location}</p>
        </div>

        <div className ="accommodation__summary__host">
          <div className="host__name">
              <p>{firstName}<br />{lastName}</p>
              <div className="host__picture__container">
                <img src={accommodation.host.picture} alt ={accommodation.host.name}/>
              </div>
          </div>
        </div>
      </div>

      <div className="tags-rating-info-box">
        <div className="accommodation__tags">
          {accommodation.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
        ))}
      </div>
        <StarRating rating={accommodation.rating} />
      </div>

      <div className="description-equipments-info-box">

        <DescriptionInfoBox description={accommodation.description}/>
        <EquipmentsInfoBox equipments={accommodation.equipments}/>
      </div>

    </div>

  )
}
