import Collapse from "../components/Collapse";

const DescriptionInfoBox = ({description}) => {
 
    return (
      <section className="description__container">
        <div class ="description__info__box">
            <Collapse title="Description">
              {description}
            </Collapse>
            
        </div>
      </section>
    )
  }
  
  export default DescriptionInfoBox;