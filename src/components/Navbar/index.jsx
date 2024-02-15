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
    id: 2,
    apiName: "science",
  },
  {
    name: "Entertainment",
    id: 3,
    apiName: "entertainment",
  },
  {
    name: "Sports",
    id: 4,
    apiName: "sports",
  },
  {
    name: "Politics",
    id: 5,
    apiName: "politics",
  },
  {
    name: "Business",
    id: 6,
    apiName: "business",
  },
  {
    name: "Technology",
    id: 7,
    apiName: "technology",
  },
  {
    name: "World",
    id: 9,
    apiName: "world",
  },
  {
    name: "Education",
    id: 11,
    apiName: "education",
  },
  {
    name: "Travel",
    id: 12,
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
    <header className="justify- fixed z-30 flex h-auto w-full items-center justify-around bg-gray-500 px-3 py-3 backdrop-blur-sm">
      <div className="flex justify-center px-2 text-3xl font-semibold text-white">
        XYZ News
      </div>
      <nav className="flex">
        <ul className="justify-content-between flex flex-wrap justify-center gap-3 max-lg:hidden md:gap-5">
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
