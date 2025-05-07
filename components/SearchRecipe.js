import React, { useState } from "react";
import axios from "axios";
import "./SearchRecipe.css";

const SearchRecipe = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/recipes/search?ingredients=${query}`
      );
      setRecipes(response.data);
    } catch (error) {
      alert("Error fetching recipes!");
    }
  };

  return (
    <div>
      <h2>Search Recipes</h2>
      <input
        type="text"
        placeholder="Enter ingredients"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="recipe-container">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div className="recipe-card" key={recipe._id}>
              <h3>{recipe.name}</h3>
              <div className="recipe-details">
                <div className="recipe-ingredients">
                  <strong>Ingredients:</strong>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="recipe-instructions">
                  <strong>Instructions:</strong>
                  <p>{recipe.instructions}</p>
                </div>
                <div className="recipe-time">
                  <strong>Cooking Time:</strong>
                  <p>{recipe.time} minutes</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default SearchRecipe;
