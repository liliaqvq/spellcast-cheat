import React from "react";

const WordList = ({ foundWords }) => {
  return (
    <div>
      <h3>Found Words:</h3>
      <ul>
        {foundWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
