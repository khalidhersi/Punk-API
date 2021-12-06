import React, {useState} from "react";
import beers from "../../data/beers";
import Card from "../../components/Card/Card";

const CardList = () => {
    const beersJSX = beers.map(beer => {
        return <Card name={beer.name} tagline={beer.tagline} firstBrewe={beer.first_brewed} imageUrl={beer.image_url}/>
    })

    return <div>{beersJSX}</div>

}

export default CardList;