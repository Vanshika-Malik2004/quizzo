import React from "react";
import "./landingpage.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const LadingPage = () => {
  return (
    <div className="main-container">
      <nav className="navBar">
        <div className="title">QUIZZO</div>
        <div className="signInBtn">Sign In</div>
      </nav>
      <h2 className="heading">
        Challenge your Mind, Ignite your <span>Knowledge</span>
      </h2>
      <p className="introPara">
        Welcome to Quizzo Central, your ultimate destination for trivia lovers!
        Whether you're a seasoned quiz enthusiast or just looking to have a fun
        time testing your knowledge, you've come to the right place.
      </p>
      <button className="startBtn">
        Let's get started
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default LadingPage;
