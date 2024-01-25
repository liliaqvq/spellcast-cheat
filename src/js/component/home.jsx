import React, { useRef, useState, useEffect } from "react";
import GameBoard from "./GameBoard";
import WordList from "./WordList";
import ApiInteraction from "./ApiInteraction";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";

//create your first component
const Home = () => {
  const dictionary = [
    "whale",
    "hello",
    "cookie",
    "cream",
    "chocolate",
    "pizza",
    "love",
    "cat",
    "dog",
  ];

  const inputRefs = Array.from({ length: 25 }, () => useRef(null));
  const [foundWords, setFoundWords] = useState([]);
  const [apiWords, setApiWords] = useState([]);

  const handleInputChange = (index, event) => {
    const input = event.target;
    const value = input.value;

    // Convert to uppercase
    const uppercaseValue = value.toUpperCase();

    // Update the input value
    input.value = uppercaseValue;

    // Move to the next input if the current one is filled
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleClearAll = () => {
    // Clear all input values
    inputRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.value = "";
      }
    });

    // Set focus on the first input
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  };

  const handleFindWords = () => {
    const puzzle = Array.from({ length: 5 }, () => Array(5).fill(""));

    // Populate the puzzle with the current input values
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        puzzle[i][j] = inputRefs[i * 5 + j].current.value.toUpperCase();
      }
    }

    const newFoundWords = [];

    for (const word of dictionary) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (puzzle[i][j] === word[0]) {
            if (checkWordInPuzzle(puzzle, word, i, j)) {
              newFoundWords.push(word);
            }
          }
        }
      }
    }

    // Do something with the newFoundWords array (e.g., update state)
    setFoundWords(newFoundWords);
  };

  const handleBringWords = () => {
    setApiWords(words);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div>
        <h2 style={{ color: "white" }}>SPELLCAST CHEAT</h2>
      </div>
      <GameBoard
        inputRefs={inputRefs}
        handleInputChange={handleInputChange}
        handleClearAll={handleClearAll}
      />
      <button className="find-button" onClick={handleFindWords}>
        Find Words
      </button>
      <ApiInteraction handleBringWords={handleBringWords} />
      <div>
        <h3>Found Words:</h3>
        <ul>
          {foundWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>API Words:</h3>
        <ul>
          {apiWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
