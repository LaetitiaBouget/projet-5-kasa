export default function AccommodationCard({accommodation}) {
  return (
    <div className="accommodation__card">
      <img
        src={accommodation.cover}
        alt =""
        className ="accommodation__card__image"
      />
      <h2 class="accommodation__card__title">{accommodation.title}</h2>
    </div>
  )
}
