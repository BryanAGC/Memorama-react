import React, { useState, useEffect } from "react";
import Card from "./Card";
import cards from "../cards";
import "../styles/Board.css";


const Board = () => {
  const [shuffledCards, setShuffledCards] = useState(() =>
    cards.sort(() => Math.random() - 0.5)
  );
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  useEffect(() => {
    if (flipped.length === 2) {
      const [firstIndex, secondIndex] = flipped;
      const firstCard = shuffledCards[firstIndex];
      const secondCard = shuffledCards[secondIndex];

      if (firstCard.id === secondCard.id) {
        setMatched([...matched, firstIndex, secondIndex]);
        setScores((prevScores) => ({
          ...prevScores,
          [`player${currentPlayer}`]: prevScores[`player${currentPlayer}`] + 1,
        }));
      }

      setTimeout(() => {
        setFlipped([]);
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      }, 1000);
    }
  }, [flipped]);

  const handleFlip = (index) => {
    if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <div>
      <div className="scoreboard">
        <h2>Jugador 1: {scores.player1} | Jugador 2: {scores.player2}</h2>
        <h3>Turno del jugador: {currentPlayer}</h3>
      </div>
      <div className="board">
        {shuffledCards.map((card, index) => (
          <Card
            key={index}
            card={card}
            flipped={flipped.includes(index) || matched.includes(index)}
            onFlip={() => handleFlip(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
