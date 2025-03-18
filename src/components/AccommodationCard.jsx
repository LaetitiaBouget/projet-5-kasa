export default function AccommodationCard({accommodation}) {
  return (
    <div className="accommodation__card">
      <img
        src={accommodation.cover}
        alt ={accommodation.title}
        className ="accommodation__card__image"
      />
      <h3>{accommodation.title}</h3>
    </div>
  )
}
