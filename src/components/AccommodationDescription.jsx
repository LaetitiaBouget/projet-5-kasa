import Collapse from "../components/Collapse";

const DescriptionInfoBox = ({description}) => {
 
    return (
      <>
        <div class ="description__info__box">
            <Collapse title="Description">
              {description}
            </Collapse>   
        </div>
      </>
    )
  }
  
  export default DescriptionInfoBox;