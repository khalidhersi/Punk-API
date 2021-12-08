import React, {useEffect, useState} from "react";

import Card from "../../components/Card/Card";
import "./CardList.scss"

const CardList = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        const URL = "https://api.punkapi.com/v2/beers/"
        fetch(URL)
        .then(response => response.json())
        .then(each => {
            setBeers(each)
        })
    }, [])

    const beersJSX = beers.map((beer, index) => {
        return <Card key={"user" + index} name={beer.name} tagline={beer.tagline} firstBrewe={beer.first_brewed} imageUrl={beer.image_url} description={beer.description}/>
    })

    return <div className="beer-item">{beersJSX}</div>

}

export default CardList;