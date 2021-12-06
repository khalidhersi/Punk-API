import React from "react";
import beers from "../../data/beers";

const CardList = () => {

    const [cardArr, setCardArr] = useState([]);

    const beersJSX = beers.map(beer => {
        return <Card name={beer.name} tagline={beer.tagline} firstBrewe={beer.first_brewed} imageUrl={beer.image_url}/>
    })

    return <div>{beersJSX}</div>

}

export default CardList;