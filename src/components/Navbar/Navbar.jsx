import styles from "./Navbar.module.scss";
import SearchBar from "../SearchBar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Navbar = ({ setSearch }) => {
    return (
        <>
            <div className = {styles.Navbar}>
                <Link className = {styles.Navbar_link} to="/">
                    <h2 className = {styles.Navbar_header}>Cat Breeds</h2>
                </Link>
                <Link className = {styles.Navbar_link} to="/catfacts">
                    <h2 className = {styles.Navbar_header}>Cat Facts</h2>
                </Link>
                <Link className = {styles.Navbar_link} to="/favourites">
                    <div className= {styles.Navbar_header}>
                        <h2>Favourite Breeds</h2>
                    </div>
                </Link>
                <div className = {styles.Navbar_header}>
                    <SearchBar setSearch={setSearch}/>
                </div>
            </div>
        </>
    );
}

export default Navbar;