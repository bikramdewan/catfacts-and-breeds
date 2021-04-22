import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import styles from "./SearchBar.module.scss"

const SearchBar = ({ setSearch }) => {
    const [isOpen, setisOpen] = useState(false);
    
    return (
        <div >
            {!isOpen || <input type="text" className={styles.SearchBar_input} onChange={(event)=>setSearch(event.target.value)} placeholder="Search for breeds"></input>}
            <FontAwesomeIcon className={styles.SearchBar_icon} icon={faSearch} onClick={()=>setisOpen(!isOpen)} size="lg"/>
        </div>
    );
}

export default SearchBar;