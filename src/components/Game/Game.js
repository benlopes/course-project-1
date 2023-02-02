import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
// import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuesslist] = React.useState([]);

  return (
    <>
      {/* <GuessList guessList={guessList} /> */}
      <GuessResults guessList={guessList} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guessList={guessList}
        setGuesslist={setGuesslist}
      />
    </>
  );
}

export default Game;
