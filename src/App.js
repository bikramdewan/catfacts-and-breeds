	import styles from './App.module.scss';
	import Navbar from './components/Navbar';
	import Routes from './containers/Routes';


	import { BrowserRouter as Router } from 'react-router-dom';
	import { useEffect, useState } from 'react';
	import { getBreeds, addIsFav } from './services/catBreedsApi.js';


	const App = (factList) => {
		const [breedSearch, setBreedSearch] = useState('');
		const [breedInformation, setbreedInformation] = useState([]);
		const [displayedBreeds, setDisplayedBreeds] = useState([]);

	const updateBreeds = async () => {
		const newBreeds = await getBreeds();
		const breedsWithFav = addIsFav(newBreeds);
		setbreedInformation(breedsWithFav);
	}

	const updateDisplayedBreeds = () => {
		setDisplayedBreeds(breedInformation.filter(eachBreed => {
		return eachBreed.breed.toLowerCase().includes(breedSearch.toLowerCase());
		}));
	}

	const toggleFav = (breed) => {
		setbreedInformation(breedInformation.map(eachBreed => {
		return eachBreed.breed !== breed.breed 
			? eachBreed : { ...eachBreed, isFav: !eachBreed.isFav };
		}));
	}

	useEffect(() => {
		updateBreeds();
	}, []);

	useEffect(() => {
		updateDisplayedBreeds();
	}, [breedSearch, breedInformation]);


	return (
		<div className={styles.App}>
		<Router>
			<Navbar setSearch={setBreedSearch}/>
			<div className={styles.App__content}>
				<Routes breedInformation={displayedBreeds} toggleFav={toggleFav}/>
			</div>
		</Router>
		</div>
	);
	}

	export default App;
