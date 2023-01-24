import { useContext, useState, useEffect } from "react";
import { FavoriteItemsContext } from "./FavoriteItemsContext";
import { initialUrl } from "./constants";
import solid from "./assets/heart-solid.svg";

const FavoriteProducts = () => {
  const [favoriteIds, handleLikes] = useContext(FavoriteItemsContext);
  const urlArray = favoriteIds.map(
    (favoriteId) => initialUrl + "/" + favoriteId
  );
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);

      let results = [];
      try {
        for (let i = 0; i < urlArray.length; i++) {
          const response = await fetch(urlArray[i]);
          const result = await response.json();
          results.push(result);
        }
        setIsLoading(false);
      } catch (error) {
        console.log("Error", error.message);
        setIsLoading(false);
        setError("Download is failed");
      }
      setFavorites(results);
    };
    getProduct();
  }, []);

  function handleRemove(favoriteProduct) {
    const unlike = +favoriteProduct.target.id;
    setFavorites(favorites.filter((favorite) => favorite.id !== unlike));
    handleLikes(favoriteProduct);
  }

  return (
    <ul className="favorites">
      {!isLoading ? (
        favorites.length ? (
          favorites.map((favorite) => (
            <li className="favorite" key={favorite.id}>
              <div className="container-svg">
                <img
                  id={favorite.id}
                  className="hearts"
                  src={solid}
                  alt="solid"
                  width="20"
                  onClick={handleRemove}
                />
              </div>
              <div className="imgContainer">
                <img src={favorite.image} alt={favorite.title} width="300" />
                <p> {favorite.title}</p>
              </div>
            </li>
          ))
        ) : (
          <p>Please, add your favorite products!</p>
        )
      ) : (
        <p>Loading...</p>
      )}
      <h2>{error}</h2>
    </ul>
  );
};

export default FavoriteProducts;
