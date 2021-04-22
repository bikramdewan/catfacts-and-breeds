
import FactCard from '../FactCard';


const FactList = ({factList}) => {
    
  if (!factList) {
      return null;
    }
    return (
      <>
      {factList.map(fact => {
        console.log(fact)
      return <FactCard key={fact.fact} fact={fact}/>
        
      })}
      </>
      
    )
}

export default FactList;