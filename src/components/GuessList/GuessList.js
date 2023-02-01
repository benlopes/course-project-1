import React from "react";

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      <h3 className="guess">GUESSES's list</h3>
      {guessList.map((guess) => (
        <p key={guess.id} className="guess">
          {guess.guess}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
