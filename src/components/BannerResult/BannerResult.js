import React from "react";

function BannerResult(hasWon, correctWord, numOfGuesses) {
  return hasWon ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuesses} guesses</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{correctWord}</strong>.
      </p>
    </div>
  );
}

export default BannerResult;
