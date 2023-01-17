import Categories from "./Categories";
import ProductList from "./ProductsList";
import { useState, useEffect } from "react";
import { initialUrl } from "./constants"

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState(initialUrl);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { 
    const getProduct = async () => {
      setIsLoading(true)
        try {
          const response = await fetch(query);
          const result = await response.json();

        setProducts (result);
        setIsLoading(false)
        } catch (error) {
            console.log("Error", error.message);
            setIsLoading(false)
            setError("Download is failed")
          }
          
        }
       getProduct();

      }, [query]);

  function handleFiltered(event) {
    event.preventDefault()
    const eventInnerText = event.target.innerText
    const queryCategory = initialUrl +'/category/'+ eventInnerText
    setQuery(queryCategory);
    } 

  return (
    <div className="App">
     
      <Categories title="Products" handleFiltered={handleFiltered} />
      { !isLoading ? (<ProductList products={products} />) :
      (<p>Loading...</p>)} 
      <h2>{error}</h2> 
      
    </div>
  );
}

export default App;