import { createContext, useState, useEffect } from "react";
import { initialUrl } from "./constants";
import { FavoriteItemsProvider } from "./FavoriteItemsContext";


export const ProductContext = createContext();

export function ProductsProvider({ children }) {
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


        setProducts (result.id);
        setIsLoading(false)
        } catch (error) {
            console.log("Error", error.message);
            setIsLoading(false)
            setError("Download is failed")
          }
          
        }
       getProduct();

      }, [query]);

  function handleFiltered(categoryId) {
    categoryId.preventDefault()
    const eventInnerText = categoryId.target.innerText
    const queryCategory = initialUrl +'/category/'+ eventInnerText
    setQuery(queryCategory);
    } 

    return(
        <ProductContext.Provider value={[products, handleFiltered]}>
             { !isLoading ? ({children}) :
      (<p>Loading...</p>)} 
      <h2>{error}</h2> 
        </ProductContext.Provider>

    )
}