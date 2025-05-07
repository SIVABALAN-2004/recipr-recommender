**Recipe Recommender** MERN stack app:
---

## 📌 Project: Recipe Recommender Web Application

### 🔍 Overview

The **Recipe Recommender** is a full-stack web application that allows users to discover, search, and submit cooking recipes based on ingredients or categories. Built using the **MERN stack** (MongoDB, Express.js, React, Node.js), it offers user authentication, recipe management, and a clean, responsive UI.

---

### 🎯 Key Features

* **User Authentication:** Signup/Login functionality with protected routes using JWT-based middleware.
* **Recipe Management:** Users can add new recipes, search recipes by ingredients, and view recipe details.
* **Ingredient-Based Search:** Smart search to find recipes based on user-input ingredients.
* **Clean UI/UX:** React frontend with styled components for a user-friendly experience.
* **API Services Layer:** Modular service files handle API interactions cleanly and efficiently.

---

### 🏗️ Tech Stack

* **Frontend:** React.js, CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JSON Web Tokens (JWT)
* **Others:** dotenv, axios, React Router, etc.

---

### 📁 Folder Highlights

* **backend/**: All server-side code including routing, controllers, middleware, and database models.
* **frontend/src/components/**: Reusable React components for UI and views like Login, Signup, Search, and Add Recipe.
* **frontend/src/services/**: API service logic to communicate with the backend.
* **frontend/src/utils/**: Utility functions and shared configurations.

---


```
RECIPE-RECOMMENDER/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── recipeController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Recipe.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── recipe.js
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── build/
│   ├── node_modules/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── FrontPage.css
│       │   ├── FrontPage.js
│       │   ├── Login.js
│       │   ├── LoginSignup.css
│       │   ├── OptionPages.css
│       │   ├── OptionsPage.js
│       │   ├── SearchRecipe.css
│       │   ├── SearchRecipe.js
│       │   ├── Signup.js
│       ├── services/
│       │   ├── authService.js
│       │   └── recipeService.js
│       ├── utils/
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

