import React from "react";

function GuessInput({ guess, setGuess, guessList, setGuesslist }) {
  // const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formattedGuess = guess.toLocaleUpperCase();
    const guessListItem = { guess: formattedGuess, id: Math.random() };
    console.info(guessListItem);

    const nextGuessList = [...guessList, guessListItem];
    setGuesslist(nextGuessList);

    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        autoComplete="off"
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        minLength={5}
        required={true}
        onChange={(e) => setGuess(e.target.value)}
      />
    </form>
  );
}

export default GuessInput;
