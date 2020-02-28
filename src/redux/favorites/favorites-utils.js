export const handleFavorite = (favoriteItem, arrayOfFavorites) => {
    const favoriteIndex = arrayOfFavorites.findIndex(f => f.Key === favoriteItem.Key);
    if (favoriteIndex >= 0) {
        arrayOfFavorites.splice(favoriteIndex, 1)
        return arrayOfFavorites;
    }

    arrayOfFavorites.push(favoriteItem);
    return arrayOfFavorites;
}