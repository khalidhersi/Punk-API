import React from "react";

const Card = (props) => {
    const { name, tagline, firstBrewe, imageUrl } = props;

    return <div className="beer-container">
        <img src={imageUrl} alt="" className="beer-image" />
        <div className="beer-container__info">
            <h3 className="beer-container__name">{name}</h3>
            <p className="beer-container__firstBrewe">{firstBrewe}</p>
            <p className="beer-container__tagline">{tagline}</p>
        </div>
    </div>

}

export default Card;