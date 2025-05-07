const addRecipe = (req, res) => {
    res.status(201).json({ message: "Recipe added successfully" });
};

module.exports = { addRecipe };
