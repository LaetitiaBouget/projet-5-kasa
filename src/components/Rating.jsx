import star from '../assets/images/star.png'

const StarRating = ({rating}) => {
    const maxStars = 5
    const activeStars = parseInt (rating)
    const inactiveStars = maxStars - activeStars

    return (
        <div className="star-rating">
            {Array.from({ length: activeStars}, (_, index) => (
                <img key={index} src={star} alt="étoile" className="star active"/>
            ))}

            {Array.from({ length: inactiveStars}, (_, index) => (
                    <img key={index} src={star} alt="étoile" className="star inactive"/>
                ))}
        </div>
    )
}
export default StarRating;