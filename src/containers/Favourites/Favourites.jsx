import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/FeedbackPanel";
import { useEffect, useState } from "react";

const Favourites = ({ breedInformation, toggleFav }) => {
    const [favBreeds, setFavBreeds] = useState(breedInformation.filter(breed => breed.isFav));

    useEffect(() => {
        setFavBreeds(breedInformation.filter(breed => breed.isFav));
    }, [breedInformation])

    return favBreeds.length
        ? <CardList breedInformation={favBreeds} toggleFav={toggleFav}/>
        : <FeedbackPanel title={"No favourite breeds selected"} description={"Please visit dashboard and select your favourite breeds"}/>

}


export default Favourites;