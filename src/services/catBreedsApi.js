const API_URL = "https://catfact.ninja/breeds?limit=100";

export const getBreeds = async () => {
    const response = await fetch(`${API_URL}`);
    const catBreeds = await response.json();
    return catBreeds.data;
}

export const addIsFav = (breedInformation) => {
    const newObj = breedInformation.map(breed =>  {
        return { ...breed, isFav: false}
    });
    return newObj;
}