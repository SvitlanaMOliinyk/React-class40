import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { initialUrl } from "./constants";

const ProductId = () => {
  const [productId, setProductId] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();

  
  useEffect(() => {
    const getProductById = async () => {
        try {
          const response = await fetch(initialUrl + '/' + id);
          const result = await response.json();
          setProductId(result);
        } catch (error) {
          console.log("Error", error.message);
          setError("Download is failed")
        }
    }
    getProductById()
  }, [id]);

  return (
    <div className="productId">
         <h4> {productId.title}</h4> 
       {Object.keys(productId).length ? (<img src={productId.image} alt={productId.title} width="300" />) :  
       (<h3>Loading...</h3>)} 
      <p>Price: <b>{productId.price}</b></p>
      <p>{productId.description}</p>
      <h2>{error}</h2> 
    </div>
  );
};

export default ProductId;
