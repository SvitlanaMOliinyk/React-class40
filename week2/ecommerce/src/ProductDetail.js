import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { initialUrl } from "./constants";

const ProductDetail = () => {
  const [productId, setProductId] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      setError("");
      setIsLoading(true);
      try {
        const response = await fetch(initialUrl + "/" + id);
        const result = await response.json();
        setProductId(result);
        setIsLoading(false);
      } catch (error) {
        console.log("Error", error.message);
        setIsLoading(false);
        setError("Download is failed");
      }
    };
    getProductById();
  }, [id]);

  return (
    <div className="productId">
      <h4> {productId.title}</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <h2>{error}</h2>
      ) : Object.keys(productId).length ? (
        <img src={productId.image} alt={productId.title} width="300" />
      ) : (
        <p>There are no products to show</p>
      )}
      <p>
        Price: <b>{productId.price}</b>
      </p>
      <p>{productId.description}</p>
      <h2>{error}</h2>
    </div>
  );
};

export default ProductDetail;
