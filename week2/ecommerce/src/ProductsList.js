import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <ul className="productList">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;