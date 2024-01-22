// Favorites.json
import React from "react";
import { useGlobalContext } from "./context";

const Favorites = () => {
  const { favorites, removeFromFavorites, selectMeal } = useGlobalContext();

  return (
    <div className="favorites my-3">
      <div className="favorites-content ">
        <h4>Favorites</h4>
        <div className="favorite-item d-flex gap-2">
          {favorites.map((favorite) => {
            const { idMeal, strMealThumb: imgSrc } = favorite;
            return (
              <div key={idMeal}>
                <img
                  src={imgSrc}
                  alt="favorite"
                  className="favorites-img"
                  onClick={() => selectMeal(idMeal, true)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idMeal)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
