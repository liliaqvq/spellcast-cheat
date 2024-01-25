import React, { useState, useEffect } from "react";

const ApiInteraction = ({ handleBringWords }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://wordsapiv1.p.mashape.com/words";
        const response = await fetch(url);
        const data = await response.json();
        const [item] = data.results[0];
        // Handle the fetched data as needed
        handleBringWords(item.words);
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchData();
  }, [handleBringWords]);

  return null; // You might render something here if needed
};

export default ApiInteraction;
