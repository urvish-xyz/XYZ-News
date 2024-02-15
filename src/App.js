import React, { useState, useEffect } from "react";
import NewsSection from "./components/NewsSection";
import Navbar from "./components/Navbar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [mydata, setMyData] = useState([]);

  const apiget = (selectedCategory) => {
    fetch("https://inshortsapi.vercel.app/news?category=" + selectedCategory)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setMyData(json.data);
      });
  };

  useEffect(() => {
    apiget(selectedCategory);
    const interval = setInterval(() => {
      apiget(selectedCategory);
    }, 500000);
    return () => clearInterval(interval);
  }, [selectedCategory]);

  return (
    <div className="app">
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setMyData={setMyData}
      />
      <div className="mx-auto min-h-screen max-w-6xl">
        <NewsSection mydata={mydata} />
      </div>
    </div>
  );
}

export default App;
