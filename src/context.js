// context.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const mealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

export const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const storedStringFavorites = localStorage.getItem("favorites");
  const storedFavorites = storedStringFavorites
    ? JSON.parse(storedStringFavorites)
    : [];
  const [favorites, setFavorites] = useState(storedFavorites);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const fetchRandomMeal = () => {
    fetchData(randomMealURL);
  };

  const selectMeal = (id, isFavoriteMeal) => {
    let meal;
    if (isFavoriteMeal) {
      meal = favorites.find((favorite) => favorite.idMeal === id);
    } else {
      meal = meals.find((meal) => meal.idMeal === id);
    }

    setSelectedMeal(meal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addToFavorites = (id) => {
    let meal;
    const alreadyFavorite = favorites.find((meal) => meal.idMeal === id);
    if (!alreadyFavorite) {
      meal = meals.find((meal) => meal.idMeal === id);
      setFavorites((prevValue) => [...prevValue, meal]);
    }
  };

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.idMeal !== id
    );
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    fetchData(mealsURL);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetchData(`${mealsURL}${searchTerm}`);
    }
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <AppContext.Provider
      value={{
        meals,
        loading,
        setSearchTerm,
        fetchRandomMeal,
        showModal,
        selectMeal,
        selectedMeal,
        closeModal,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
