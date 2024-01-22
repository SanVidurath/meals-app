// Search.js
import React, { useState } from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText("");
    }
  };

  const handleRandomMeal = () => {
    fetchRandomMeal();
    setSearchTerm("");
    setText("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <form
          action=""
          className="form-items d-flex align-items-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={handleChange}
          />
          <button className="btn btn-primary">search</button>
          <button className="btn btn-success" onClick={handleRandomMeal}>
            surprise
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
