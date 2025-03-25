const Banner = ({image, text}) => {

  return (
    <section className="banner">
      <img src={image} alt="Bannière" className="banner__img"/>
      {text && <h1 className="banner__text">{text}</h1>}
    </section>
  )
}

export default Banner