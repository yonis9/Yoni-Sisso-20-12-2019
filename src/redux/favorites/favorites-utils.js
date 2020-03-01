

export const handleFavorite = (favoriteItem, arrayOfFavorites) => {
    const favorite = arrayOfFavorites.find(f => f.Key === favoriteItem.Key);
    if (favorite) {
        return arrayOfFavorites.filter(f => f.Key !== favoriteItem.Key);
    }

    return [...arrayOfFavorites, favoriteItem]
}