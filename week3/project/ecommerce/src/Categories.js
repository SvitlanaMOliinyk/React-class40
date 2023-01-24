import { categoryUrl } from "./constants";
import useFetch from "./useFetch";

const Categories = ({ title, handleFiltered }) => {
  const { data: categories } = useFetch(categoryUrl);
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
