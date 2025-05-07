import React from "react";
import { useNavigate } from "react-router-dom";
import "./FrontPage.css";

const FrontPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/options"); // Navigate to the options page
  };

  return (
    <div className="front-page">
      <h1>Welcome to Recipe Recommender</h1>
      <button onClick={handleGetStarted} className="get-started-btn">
        Get Started
      </button>
    </div>
  );
};

export default FrontPage;
