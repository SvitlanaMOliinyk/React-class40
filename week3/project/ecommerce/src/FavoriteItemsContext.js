import { createContext, useState } from "react";

export const FavoriteItemsContext = createContext();
export function FavoriteItemsProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function handleLikes(productHeart) {
    const productHeartId = +productHeart.target.id;
    if (favoriteIds.includes(productHeartId)) {
      setFavoriteIds(
        favoriteIds.filter((favoriteId) => favoriteId !== productHeartId)
      );
    } else {
      setFavoriteIds([...favoriteIds, productHeartId]);
    }
  }
  return (
    <FavoriteItemsContext.Provider value={[favoriteIds, handleLikes]}>
      {children}
    </FavoriteItemsContext.Provider>
  );
}
