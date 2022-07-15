import "./App.css";
import { useState } from "react";
import data from "../data.json";

function App() {
  //data.foodItems.map((i, index) => <div>{console.log(i.foodName)}</div>);

  const allCategories = [
    "All",
    ...new Set(data.foodItems.map((item, index) => item.foodType)),
  ];
  console.log(allCategories);

  const [menuItems, setMenuItem] = useState(data.foodItems);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (foodType) => {
    const newItems = data.foodItems.filter(
      (item) => item.foodType === foodType
    );
    setMenuItem(newItems);

    if (foodType === "All") {
      setMenuItem(data.foodItems);
      return;
    }
  };
  return (
    <div>
      <div className="text-center mt-8">
        {categories.map((category, index) => {
          return (
            <button
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mx-12 mt-8 ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#9772FB] rounded-lg flex justify-center flex-col p-8 mb-8 "
          >
            <img
              className="w-48 h-48 mx-auto"
              src={item.foodImage}
              alt={item.foodName}
            />
            <h1 className="text-black text-center text-3xl mt-2">
              {item.foodName}
            </h1>
            <div></div>
            <h2 className="text-white text-center font-bold text-xl">
              {item.foodType}
            </h2>
            <h2 className="text-red-200 text-center font-bold text-lg">
              Calories: {item.calories}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
