export const getFavsFromStorage = () => {
    const localData = JSON.parse(localStorage.getItem("favs"));
    return localData ? localData : null;
}

export const setFavsInStorage = (favs) => {
    localStorage.setItem("favs", JSON.stringify(favs));
}

export const removeFavsFromStorage = () => {
    localStorage.removeItem("favs");
}