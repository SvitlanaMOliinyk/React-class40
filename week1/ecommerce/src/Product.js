const Product = ({ product }) => {
  return (
    <li className="product" key={product.id}>
      <div className="imgContainer">
        <img src={product.image} alt={product.title} width="300" />
        <p> {product.title}</p>
      </div>
    </li>
  );
};

export default Product;
