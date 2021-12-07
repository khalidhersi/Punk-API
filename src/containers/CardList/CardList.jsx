import React from "react";
import beers from "../../data/beers";
import Card from "../../components/Card/Card";
import "./CardList.scss"

const CardList = () => {
    const beersJSX = beers.map((beer, index) => {
        return <Card key={"user" + index} name={beer.name} tagline={beer.tagline} firstBrewe={beer.first_brewed} imageUrl={beer.image_url} description={beer.description}/>
    })

    return <div className="beer-item">{beersJSX}</div>

}

export default CardList;