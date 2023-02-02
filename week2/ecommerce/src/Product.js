import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <li className="product" key={product.id}>
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
