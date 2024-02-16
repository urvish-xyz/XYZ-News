import React, { useState } from "react";
import NavCategories from "../NavCategories";
import "@fontsource/poppins/400.css";

const categories = [
  {
    name: "All news",
    id: 1,
    apiName: "all",
  },
  {
    name: "Science",
    id: 10,
    apiName: "science",
  },
  {
    name: "Entertainment",
    id: 9,
    apiName: "entertainment",
  },
  {
    name: "Sports",
    id: 8,
    apiName: "sports",
  },
  {
    name: "Politics",
    id: 7,
    apiName: "politics",
  },
  {
    name: "Business",
    id: 6,
    apiName: "business",
  },
  {
    name: "Technology",
    id: 5,
    apiName: "technology",
  },
  {
    name: "World",
    id: 4,
    apiName: "world",
  },
  {
    name: "Education",
    id: 3,
    apiName: "education",
  },
  {
    name: "Travel",
    id: 2,
    apiName: "travel",
  },
];

const Navbar = ({ selectedCategory, setSelectedCategory, setMyData }) => {
  const [theme, setTheme] = useState("light");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setMyData([]);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Toggle theme class on body
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
  };

  return (
    <header className="fixed z-30 flex items-center justify-around w-full h-auto px-3 py-3 bg-gray-500 justify- backdrop-blur-sm">
      <div className="flex justify-center px-2 text-3xl font-semibold text-white">
        XYZ News
      </div>
      <nav className="flex">
        <ul className="flex flex-wrap justify-center gap-3 justify-content-between max-lg:hidden md:gap-5">
          {categories.map((category) => (
            <NavCategories
              selectedCategory={selectedCategory}
              category={category}
              key={category.id}
              onClick={handleCategoryClick}
            />
          ))}
        </ul>
        <ul className="justify-content-between absolute left-0 mt-5 hidden w-[100vw] flex-col items-center justify-center gap-3 bg-gray-500 max-lg:flex md:gap-5">
          {categories.map((category) => (
            <NavCategories
              selectedCategory={selectedCategory}
              category={category}
              key={category.id}
              onClick={handleCategoryClick}
            />
          ))}
        </ul>
      </nav>
      <button className="btn" onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
};

export default Navbar;
