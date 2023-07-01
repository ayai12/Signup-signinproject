import React, { useState, useEffect } from 'react';
import 'animate.css/animate.min.css';
import './App.css'; // Custom styles for the game

const Game = () => {
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [kills, setKills] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', handleShoot);

    return () => {
      document.removeEventListener('keydown', handleShoot);
    };
  }, []);

  const startGame = () => {
    setStarted(true);
    setGameOver(false);
    setKills(0);
  };

  const endGame = () => {
    setStarted(false);
    setGameOver(true);
    setHighScore(kills > highScore ? kills : highScore);
  };

  const handleShoot = (event) => {
    if (event.keyCode === 32) { // Spacebar key
      setKills((kills) => kills + 1);
    }
  };

  const renderGame = () => {
    return (
      <div>
        <div className="game-container">
          <div className="player-gun"></div>
          <div className="monster"></div>
          {/* Additional monsters go here */}
        </div>
        <div className="kills-counter">
          <span>Kills: {kills}</span>
        </div>
      </div>
    );
  };

  const renderStartScreen = () => {
    return (
      <div className="start-screen">
        <h1>Welcome to the Shooting Game</h1>
        <button className="btn btn-primary" onClick={startGame}>
          Start Game
        </button>
      </div>
    );
  };

  const renderGameOverScreen = () => {
    return (
      <div className="game-over-screen">
        <h1>Game Over</h1>
        <p>Your Score: {kills}</p>
        <p>High Score: {highScore}</p>
        <button className="btn btn-primary" onClick={startGame}>
          Play Again
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      {started && !gameOver && renderGame()}
      {!started && !gameOver && renderStartScreen()}
      {gameOver && renderGameOverScreen()}
    </div>
  );
};

export default Game;
