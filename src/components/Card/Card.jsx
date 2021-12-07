import React from "react";
import "./Card.scss"

const Card = (props) => {
    const { name, tagline, firstBrewe, imageUrl } = props;

    return <div className="beer-container">
        <div className="beer-container__info">
            <h3 className="beer-container__name">{name}</h3>
            <div className="mid">
                <p className="beer-container__tagline">{tagline}</p>
                <img src={imageUrl} alt="" className="beer-image" />
            </div>
            <p className="beer-container__firstBrewe" >First Brewed in  {firstBrewe}</p>
        </div>
    </div>

}

export default Card;