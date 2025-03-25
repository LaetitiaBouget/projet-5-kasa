export default function AccommodationCard({accommodation}) {
  return (
    <div className="accommodation__card">
      <img
        src={accommodation.cover}
        alt ={accommodation.title}
        className ="accommodation__card__image"
      />
      <p class="accommodation__card__title">{accommodation.title}</p>
    </div>
  )
}
