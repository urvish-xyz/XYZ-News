import React from "react";

const NavCategories = ({ selectedCategory, category, onClick }) => {
  return (
    <div className="cursor-pointer">
      <li
        className={`rounded-xl px-1 py-1 ${selectedCategory === category.apiName ? "active" : ""}`}
        onClick={() => onClick(category.apiName)}
      >
        {" "}
        {category.name}
      </li>
    </div>
  );
};

export default NavCategories;
