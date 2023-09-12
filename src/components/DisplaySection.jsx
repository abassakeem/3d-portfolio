import React from "react";

function DisplaySection({triggerPreview}) {

    const handleScrollToTop = () => {
        window.scrollTo({top:0,
             left: 0,
              behaviour: "smooth"})
    }
    return ( 
        <div className="display-section wrapper">
            <h2 className="title">Thanks for reaching the end</h2>
            <p className="text">Hope you liked what you saw</p>
            <span className="description">
               View my avatar in 3d
            </span>
            <button className="button" onClick={triggerPreview}>View me!</button>
            {/* <button className="back-button" onClick={handleScrollToTop}>Top</button> */}
        </div>
     );
}

export default DisplaySection;