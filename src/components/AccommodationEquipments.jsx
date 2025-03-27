import Collapse from "../components/Collapse";

const EquipmentsInfoBox = ({equipments}) => {

    return (
      <div className="equipments__container">
        <div class ="equipments__info__box">
            <Collapse title="Équipements">
                <ul className="equipments__list" >
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </Collapse>
        </div>
      </div>
    )
  }
  
  export default EquipmentsInfoBox;
