const express = require("express");
const Recipe = require("../models/Recipe");
const router = express.Router();

// Add Recipe
router.post("/add-recipe", async (req, res) => {
  const { name, ingredients, instructions, time } = req.body;
  try {
    const newRecipe = new Recipe({ name, ingredients, instructions, time });
    await newRecipe.save();
    res.json({ success: true, message: "Recipe added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding recipe" });
  }
});

// Search Recipes by Ingredients
router.get("/search", async (req, res) => {
  const { ingredients } = req.query;
  if (!ingredients) {
    return res.status(400).json({ success: false, message: "No ingredients provided" });
  }

  const ingredientList = ingredients
    .toLowerCase()
    .split(",")
    .map((item) => item.trim());

  try {
    // Ensure we match exact ingredients
    const recipes = await Recipe.find({
      ingredients: { $elemMatch: { $in: ingredientList } }
    });

    console.log("Matching Recipes:", recipes); // For debugging

    res.json(recipes);
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ success: false, message: "Error fetching recipes" });
  }
});




module.exports = router;
