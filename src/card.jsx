import React from "react";

const Card = (props) => {
    return (
        <>
          
        <div className="col-md-4 itemBox mb-5" data-items="cake">
                    <figure className="figure">
                        <img src = {props.imgsrc} alt="" className="figure-image img-fluid" />
                        <figcaption className="figure-caption py-2 text-dark bg-white">
                           {props.title}
                        </figcaption>
                    </figure>
        </div>
        </>
    )

}

export default Card;