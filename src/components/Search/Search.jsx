import {useState} from 'react';
import styles from './Search.module.scss';
import FactList from '../FactList'

const Search = () => {
    const [numOfFact, setnumOfFact] = useState('');
    const [factList, setFactList] = useState(null);
  
    const handleChange = event => setnumOfFact(event.target.value);
    const fetchFacts = () => {
      if(numOfFact) {
        fetch(`https://catfact.ninja/facts?limit=${numOfFact}&max_length=140`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            
            const facts = data.data.map(({fact}) => 
            {
              return {
              fact
              }
            });
            setFactList(facts);
            console.log(facts);
          });
      }
    }
    
    return (
      <div className={styles.Search}>
        <img className={styles.Search_ImageContainer} src={`${process.env.PUBLIC_URL}/cat.jpg`}></img>
          <div className={styles.Search_Box}>
          <input className={styles.Search_Input} type="text" value={numOfFact} onChange={handleChange} placeholder="Please enter number of cat facts..."/>
          <button className={styles.Search_Button} onClick={fetchFacts}>Click me for Cat Facts</button>
        </div>
        {factList && (
          <>
            <div className={styles.Search_Result}>
              <h2>Cat Facts</h2>
            </div>
            <div className={styles.Search_Card}>
              <FactList factList={factList}/>
            </div>
          </>
        )}
      </div>
    );
}

export default Search;