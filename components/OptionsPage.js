import React from "react";
import { useNavigate } from "react-router-dom";
import "./OptionPages.css";
const OptionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="options-page">
      <h2>What would you like to do?</h2>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/signup")}>Signup</button>
      <button onClick={() => navigate("/search")}>Search Recipe</button>
    </div>
  );
};

export default OptionsPage;
