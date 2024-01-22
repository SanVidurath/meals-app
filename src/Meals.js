// Meals.js
import React from "react";
import { useGlobalContext } from "./context";
import "./styles.css";
import { FaHeart } from "react-icons/fa6";

const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites } = useGlobalContext();

  if (loading) {
    return (
      <div className="container">
        <div className="row justify-content-center my-3">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  if (!meals) {
    return (
      <div className="container">
        <div className="row justify-content-center my-3">
          <h1>No items found. Check errors and try again.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center my-3">
        <div className="card-collection">
          {meals.map((singleMeal) => {
            const { idMeal, strMeal: title, strMealThumb: imgSrc } = singleMeal;
            return (
              <div key={idMeal} className="card">
                <img
                  src={imgSrc}
                  alt="meal"
                  className="card-img-top"
                  style={{ cursor: "pointer" }}
                  onClick={() => selectMeal(idMeal, false)}
                />
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="card-title">{title}</h4>
                    <FaHeart
                      style={{ cursor: "pointer" }}
                      className="icon"
                      onClick={() => addToFavorites(idMeal)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Meals;
