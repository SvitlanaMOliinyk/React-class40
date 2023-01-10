import Categories from "./Categories";
import ProductList from "./ProductsList";
import allProducts from "./fake-data/all-products";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(allProducts);

  function handleFiltered(event) {
    const eventInnerText = event.target.innerText;
    const catName = eventInnerText.slice(6);
    console.log(catName);
    const chosenProducts = allProducts.filter(
      (product) => product.category === catName
    );
    setProducts(chosenProducts);
  }

  return (
    <div className="App">
      <Categories title="Products" handleFiltered={handleFiltered} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
