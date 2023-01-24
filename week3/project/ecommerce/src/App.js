import Categories from "./Categories";
import ProductList from "./ProductsList";
import { useState } from "react";
import { initialUrl } from "./constants";
import useFetch from "./useFetch";

function App() {
  const [query, setQuery] = useState(initialUrl);
  const { data, isLoading, error } = useFetch(query);

  function handleFiltered(categoryId) {
    categoryId.preventDefault();
    const categoryIdInnerText = categoryId.target.innerText;
    const queryCategory = initialUrl + "/category/" + categoryIdInnerText;
    setQuery(queryCategory);
  }

  return (
    <div className="App">
      <Categories title="Products" handleFiltered={handleFiltered} />
      {!isLoading ? <ProductList products={data} /> : <p>Loading...</p>}
      <h2>{error}</h2>
    </div>
  );
}

export default App;
