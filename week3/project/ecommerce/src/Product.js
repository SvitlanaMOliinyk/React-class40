import { Link } from "react-router-dom";
import { useContext } from "react";
import regular from "./assets/heart-regular.svg";
import solid from "./assets/heart-solid.svg";
import { FavoriteItemsContext } from "./FavoriteItemsContext";

const Product = ({ product }) => {
  const [favoriteIds, handleLikes] = useContext(FavoriteItemsContext);

  return (
    <li className="product" key={product.id}>
      <div className="container-svg">
        {favoriteIds.find((favoriteId) => favoriteId === product.id) ? (
          <img
            id={product.id}
            className="hearts"
            src={solid}
            alt="solid"
            width="20"
            onClick={handleLikes}
          />
        ) : (
          <img
            id={product.id}
            className="hearts"
            src={regular}
            alt="regular"
            width="20"
            onClick={handleLikes}
          />
        )}
      </div>
      <Link to={`${product.id}`}>
        <div className="imgContainer">
          <img src={product.image} alt={product.title} width="300" />
          <p> {product.title}</p>
        </div>
      </Link>
    </li>
  );
};

export default Product;
