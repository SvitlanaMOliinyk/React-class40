import { useParams } from "react-router-dom";
import { useContext } from "react";
import { initialUrl } from "./constants";
import { FavoriteItemsContext } from "./FavoriteItemsContext";
import regular from "./assets/heart-regular.svg";
import solid from "./assets/heart-solid.svg";
import useFetch from "./useFetch";

const ProductId = () => {
  const { id } = useParams();
  const [favoriteIds, handleLikes] = useContext(FavoriteItemsContext);
  const { data: productId, error } = useFetch(initialUrl + "/" + id);
  return (
    <div className="productId">
      <h4> {productId.title}</h4>
      {Object.keys(productId).length ? (
        <img src={productId.image} alt={productId.title} width="300" />
      ) : (
        <h3>Loading...</h3>
      )}
      <div className="one-heart">
        {favoriteIds.find((favoriteId) => favoriteId === productId.id) ? (
          <img
            id={productId.id}
            className="hearts"
            src={solid}
            alt="solid"
            width="20"
            onClick={handleLikes}
          />
        ) : (
          <img
            id={productId.id}
            className="hearts"
            src={regular}
            alt="regular"
            width="20"
            onClick={handleLikes}
          />
        )}
      </div>
      <p>
        Price: <b>{productId.price}</b>
      </p>
      <p>{productId.description}</p>
      <h2>{error}</h2>
    </div>
  );
};

export default ProductId;
