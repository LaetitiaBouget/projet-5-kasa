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
    <>
      <>
        <SlideShow imageUrls = {accommodation.pictures} />
      </>

        <div className="accommodation__summary">
          <div className ="accommodation__details">
              <h1 className="accommodation__title">{accommodation.title}</h1>
              <p className="accommodation__location">{accommodation.location}</p>
              <div className="accommodation__tags">
              {accommodation.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="accommodation__host-rating">
              <div className="host__name">
                <p>{firstName}<br />{lastName}</p>
                <div className="host__picture">
                  <img src={accommodation.host.picture} alt ={accommodation.host.name}/>
                </div>
              </div>
                <StarRating rating={accommodation.rating} />
            </div>
         </div>

          <div className="accommodations__description-equipments">
            <DescriptionInfoBox description={accommodation.description}/>
            <EquipmentsInfoBox equipments={accommodation.equipments}/>
          </div>

      </>
  )
}
