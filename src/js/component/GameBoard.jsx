import React, { useRef } from "react";

const GameBoard = ({ inputRefs, handleInputChange, handleClearAll }) => {
  return (
    <div className="board">
      <button className="clear-button" onClick={handleClearAll}>
        Clear All
      </button>
      <div className="small-square">
        <div className="matrix-container content-center">
          {[...Array(25).keys()].map((index) => (
            <input
              key={index}
              type="text"
              className={`matrix-tile number${index + 1}`}
              maxLength="1"
              ref={inputRefs[index]}
              onChange={(event) => handleInputChange(index, event)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
