import AccommodationCard from "./AccommodationCard";
import { accommodations } from "../assets/dataAccommodations";

export default function AccommodationList () {
    return (
        <section className ="accommodation__container">
            <div className = "accommodation__list">
                {accommodations.map(accommodation => (
                    <AccommodationCard key={accommodation.id} accommodation={accommodation}/>
                ))}
            </div>
        </section>
    )
}