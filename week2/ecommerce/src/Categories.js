import { categoryUrl } from "./constants"
import {useState, useEffect} from 'react'

const Categories = ({ title, handleFiltered }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategory = async () => {
    
            try {
              const response = await fetch(categoryUrl);
              const result = await response.json();
            setCategories (result);
            } catch (error) {
                console.log("Error", error.message);
              }
            }
            getCategory()
          }, []);
  return (
    <header>
      <h1>{title}</h1>
      <ul className="categories">
        {categories.map((category, index) => (
          <div className="category" key={index} onClick={handleFiltered}>
            {category}
          </div>
        ))}
      </ul>
    </header>
  );
};

export default Categories;