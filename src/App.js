import "./styles.css";
import React from "react";
var shoppingList = [
  "aloo🥔",
  "pudhina🥦",
  "pyaj🧄",
  "lahsun🧅",
  "dhania🥬",
  "bengan🍆",
  "tamatar🍅",
  "mitchi🌶",
  "gajar🥕"
];
export default function App() {
  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "green";
  }
  return (
    <div className="App">
      <h1>SHOPPING LIST</h1>
      <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li
              key={item}
              style={{ backgroundColor: getBg(index), padding: "1rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
