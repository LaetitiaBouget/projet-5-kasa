import { Link } from "react-router-dom";
import { accommodations } from "../assets/dataAccommodations";
import AccommodationCard from "./AccommodationCard";

export default function AccommodationList () {

    return (
        <div className ="accommodation__container">
            <div className = "accommodation__list">
                {accommodations.map(accommodation => (
                    <Link key={accommodation.id} to={`/accommodation/${accommodation.id}`}>
                        <AccommodationCard key={accommodation.id} accommodation={accommodation}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}