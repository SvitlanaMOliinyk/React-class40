import { categoryUrl } from "./constants";
import { useState, useEffect } from "react";

const Categories = ({ title, handleFiltered, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHover, setIsHover] = useState("");

  const handleMouseEnter = (category) => {
    setIsHover(category);
  };

  const handleMouseLeave = () => {
    setIsHover("");
  };

  const planeStyle = {
    backgroundColor: "#efeff0",
  };

  const hoverStyle = {
    backgroundColor: "#d3d3dd",
  };

  const selectedStyle = {
    backgroundColor: "#6E7783",
  };

  useEffect(() => {
    const getCategory = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(categoryUrl);
        const result = await response.json();
        setCategories(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log("Error", error.message);
      }
    };
    getCategory();
  }, []);
  return (
    <header>
      <h1>{title}</h1>
      <ul className="categories">
        {categories.map((category, index) => (
          <div
            className="category"
            key={index}
            id={category}
            onClick={handleFiltered}
            style={
              selectedCategory === category
                ? selectedStyle
                : isHover === category
                ? hoverStyle
                : planeStyle
            }
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
          >
            {isLoading ? <p>Loading...</p> : category}
          </div>
        ))}
      </ul>
    </header>
  );
};

export default Categories;
