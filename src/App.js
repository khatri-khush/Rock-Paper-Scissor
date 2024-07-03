import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const ROCK = "Rock";
  const PAPER = "Paper";
  const SCISSOR = "Scissor";
  const choices = [ROCK, PAPER, SCISSOR];

  const [result, setResult] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    setComputerChoice(choice);
  };

  useEffect(() => {
    if (computerChoice) determineWinner();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerChoice]);

  const determineWinner = () => {
    if (playerChoice === computerChoice) {
      return setResult("Tie");
    }
    if (
      (playerChoice === ROCK && computerChoice === SCISSOR) ||
      (playerChoice === PAPER && computerChoice === ROCK) ||
      (playerChoice === SCISSOR && computerChoice === PAPER)
    ) {
      return setResult("Player Win");
    }

    setResult("Computer Win");
  };

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    generateComputerChoice();
  };

  const getImage = (choice) => {
    switch (choice) {
      case ROCK:
        return "/Images/rock.png";
      case PAPER:
        return "/Images/paper.png";
      case SCISSOR:
        return "/Images/scissor.png";
      default:
        return null;
    }
  };

  return (
    <>
      <div className="App">
        <h2>Rock Paper Scissor</h2>
        <div>
          <p>
            player:</p>
          {playerChoice && (
            <img src={getImage(playerChoice)} alt={playerChoice} height={100} width={100} />
          )}

        </div>
        <div>
          <p>Computer:</p>
          {computerChoice && (
            <img src={getImage(computerChoice)} alt={computerChoice} height={100} width={100} />
          )}
        </div>
        <p>{result}</p>
      </div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', width: '100vw' }}>
        <div onClick={() => handlePlayerChoice(ROCK)} className="button">{ROCK}</div>
        <div onClick={() => handlePlayerChoice(PAPER)} className="button">{PAPER}</div>
        <div onClick={() => handlePlayerChoice(SCISSOR)} className="button">{SCISSOR}</div>
      </div>
    </>
  );
};

export default App;
