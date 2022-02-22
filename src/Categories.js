import React from "react";

const Categories = ({ categories, filterItems }) => {
  const category = categories.flat();
  // console.log(category);
  return (
    <div className="btn-container">
      {category.map((cat, index) => {
        return (
          <button className="filter-btn" key={index} type="button" onClick={() => filterItems(cat)}>
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
