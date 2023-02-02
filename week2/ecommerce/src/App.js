import Categories from "./Categories";
import ProductList from "./ProductsList";
import { useState, useEffect } from "react";
import { initialUrl } from "./constants";

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState(initialUrl);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(query);
        const result = await response.json();

        setProducts(result);
        setIsLoading(false);
      } catch (error) {
        console.log("Error", error.message);
        setIsLoading(false);
        setError("Download is failed");
      }
    };
    getProduct();
  }, [query]);

  function handleFiltered(categoryId) {
    const categoryIdValue = categoryId.target.id;
    setSelectedCategory(categoryIdValue);

    const queryCategory = initialUrl + "/category/" + categoryIdValue;
    setQuery(queryCategory);
  }

  return (
    <div className="App">
      <Categories
        title="Products"
        handleFiltered={handleFiltered}
        selectedCategory={selectedCategory}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default App;
