import { useEffect, useState } from "react";

function Beers () {
    const [beerList, setBeerList] = useState()
    const [beerType, setBeerType] = useState('ale')
    useEffect(() => {
        fetch(`https://api.sampleapis.com/beers/${beerType}`) //ale, stouts
        .then(response => response.json())
        .then(beers => setBeerList(beers))
        .catch(alert)
    }, [beerType])
    if(!beerList) {
        return <h2>Loading...</h2>
    }
    return (
        <>
        <button onClick={() => setBeerType('ale')}>Ale</button>
        <button onClick={() => setBeerType('stouts')}>Stouts</button>
        {/* <ul> */}
            {beerList.map(beer => (
                <ul>
                <li key={beer.id}><b>{beer.name}</b></li>
                <li key={beer.id}>{beer.price}</li>
                </ul>
            ))}
        {/* </ul> */}
        </>
    )

}

export default Beers