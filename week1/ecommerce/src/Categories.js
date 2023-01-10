import allCategories from "./fake-data/all-categories";

const Categories = ({ title, handleFiltered }) => {
  return (
    <header>
      <h1>{title}</h1>
      <ul className="categories">
        {allCategories.map((category, index) => (
          <div className="category" key={index} onClick={handleFiltered}>
            {category}
          </div>
        ))}
      </ul>
    </header>
  );
};

export default Categories;
