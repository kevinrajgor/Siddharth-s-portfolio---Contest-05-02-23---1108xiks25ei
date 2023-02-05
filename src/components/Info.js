import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div id="info-page">
      <h1> Info page </h1>
      <h2>I live in Gujarat</h2>
      <h2>My name is Kevin </h2>
      <button id="info-to-blog">
        <Link to="/blog"> Go to Blog</Link>
      </button>
      <button id="info-to-home">
        {" "}
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
};
export default Info;
