import Collapse from "../components/Collapse";

const EquipmentsInfoBox = ({equipments}) => {

    return (
      <section className="equipments__container">
        <div class ="equipments__info__box">
            <Collapse title="Équipements">
                <ul>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </Collapse>
        </div>
      </section>
    )
  }
  
  export default EquipmentsInfoBox;
