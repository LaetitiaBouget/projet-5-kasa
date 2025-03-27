import { useState } from "react";

const Collapse = ({title, children}) => {

    const [isExpanded, setIsExpanded] = useState (false);

    return (
        <div className ="collapse">
            <div className ="collapse__title">{title} 
                <button className={`collapse__toggle ${isExpanded ? "expanded" : ""}`} onClick= { () => setIsExpanded (!isExpanded) } aria-label="ouverture/fermeture menu">
                <i className ="fa-solid fa-chevron-up"></i>
                </button>
            </div>
            <div className={`collapse__content ${isExpanded ? "expanded" : ""}`}>
            <p>{children}</p>
            </div>
        </div>
    )
}

export default Collapse;