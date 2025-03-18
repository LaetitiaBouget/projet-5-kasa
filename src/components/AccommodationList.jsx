import AccommodationCard from "./AccommodationCard";
import { accommodations } from "../assets/dataAccommodations";

export default function AccommodationList () {
    return (
        <div className = "accommodation__list">
            {accommodations.map(accommodation => (
                <AccommodationCard key={accommodation.id} accommodation={accommodation}/>
            ))}
        </div>
    )
}