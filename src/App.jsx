import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const [textColor, setTextColor] = useState("black");

  const handleClick = (newColor) => {
    setColor(newColor);
    if (newColor === "black") {
      setTextColor("white");
    } else {
      setTextColor("black");
    }
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="hai" style={{ color: textColor }}>
        <h1>hlo freinds My name is Yatin Pandit</h1>
        <h2>This is my first react project</h2>
        <h1>Enter the button and change backgroundColor </h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl m-10">
          <button
            onClick={() => handleClick("red")}
            className="outline-none px-4 px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => handleClick("green")}
            className="outline-none px-4 px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => handleClick("blue")}
            className="outline-none px-4 px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => handleClick("black")}
            className="outline-none px-4 px-4 rounded-full text-white shadow-lg black"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => handleClick("purple")}
            className="outline-none px-4 px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => handleClick("skyblue")}
            className="outline-none px-4 px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "skyblue" }}
          >
            Sky Blue
          </button>
          <button
            onClick={() => handleClick("fuchsia")}
            className="outline-none px-4 px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "fuchsia" }}
          >
            Pink
          </button>
          <button
            onClick={() => handleClick("yellow")}
            className="outline-none px-4 px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => handleClick("orange")}
            className="outline-none px-4 px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => handleClick("violet")}
            className="outline-none px-4 px-4 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
