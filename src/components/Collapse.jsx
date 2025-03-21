import { useState } from "react";

const Collapse = ({title, children}) => {

    const [isExpanded, setIsExpanded] = useState (false);

    return (
        <div className ="collapse">
            <div className ="collapse__title">{title} 
                <button className={`collapse__toggle ${isExpanded ? "expanded" : ""}`} onClick= { () => setIsExpanded (!isExpanded) }>
                <i className ="fa-solid fa-chevron-up"></i>
                </button>
            </div>
            <div className={`collapse__content ${isExpanded ? "expanded" : ""}`}>
            {children}
            </div>
        </div>
    )
}

export default Collapse;