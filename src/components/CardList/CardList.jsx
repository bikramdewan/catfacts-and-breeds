import BreedCard from "../breedCard";
import styles from "./CardList.module.scss";

const CardList = ( {breedInformation, toggleFav} ) => {

    return (
        <div className={styles.CardList}>
            {breedInformation.map( (breed, index) => 
                    <BreedCard key={index} breedInformation={breed} toggleFav={toggleFav} />
            )}
        </div>
    )
}

export default CardList;
