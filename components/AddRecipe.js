import React, { useState } from "react";
import axios from "axios";
import "./AddRecipe.css";

function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const handleAddRecipe = async (e) => {
    e.preventDefault();

    const recipeData = {
  name: recipeName,  // Change title -> name
  ingredients: ingredients.split(",").map((item) => item.trim()),
  instructions: description,
  time: cookingTime, // Include cookingTime
};


    try {
      const response = await axios.post("http://localhost:5000/recipes/add-recipe", recipeData);
      if (response.status === 201) {
        alert("Recipe added successfully!");
        setRecipeName("");
        setDescription("");
        setIngredients("");
        setCookingTime("");
      }
    } catch (error) {
      alert("Failed to add recipe. Try again.");
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <form onSubmit={handleAddRecipe}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Cooking Time (minutes)"
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipe;
