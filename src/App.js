import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const name = "nhattpm";

  const age = 18;

  const isMale = true;

  const student = { name: "Hello Word" };

  const colorList = ["red", "greeen", "blue"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>! Hello Word !!</p>
        <p>
          {name} - {age}
        </p>
        {isMale ? <p>'Male'</p> : <p>'Female'</p>}

        {isMale && <p>'Male'</p>}
        {!isMale && (
          <React.Fragment>
            <p>'Female'</p>
            <p>'Female'</p>
          </React.Fragment>
        )}

        <p>{student.name}</p>

        <ul>
          {colorList.map((color) => (
            <li style={{color}}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
