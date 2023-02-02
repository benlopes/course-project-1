import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function GuessResults({ guessList, answer }) {
  const guessesList = guessList.map((object) => object["guess"].split(""));
  console.log("guessesList:", guessesList);

  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row, idx) => {
        const cellContent =
          guessesList[idx] || range(1, NUM_OF_GUESSES_ALLOWED);
        return (
          <p className="guess" key={row}>
            {cellContent.map((cell, idx2) => {
              const isItCorrect = checkGuess(cellContent.join(""), answer);
              return (
                <span
                  className={`cell ${
                    typeof cell !== "string" ? "" : isItCorrect[idx2].status
                  }`}
                  key={idx2}
                >
                  {typeof cell !== "string" ? "" : cell}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
    // <div className="guess-results">
    //   {range(0, NUM_OF_GUESSES_ALLOWED).map((row, idx) => (
    //     <p className="guess" key={row}>
    //       {guessesList.map((cell) => {
    //         return cell.map((letter) => (
    //           <span className="cell" key={Math.random()}>
    //             {letter}
    //           </span>
    //         ));
    //       })}
    //     </p>
    //   ))}
    // </div>
  );
}

// function GuessResults({ guessList }) {
//   // console.info(guessList);

//   function spreadWords(array) {
//     const newArray = array.map((object) => object["guess"].split(""));
//     console.log("newArray:", newArray);
//     const last = newArray.length - 1;
//     return newArray;
//   }

//   return (
//     <div className="guess-results">
//       {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => {
//         /* const cellsContent = [
//           ...(() => {
//             return guessList.length !== 0 && guessList.length >= row
//               ? guessList.map((el) => el.guess.split(""))
//               : range(1, NUM_OF_GUESSES_ALLOWED);
//           })(),
//         ]; */
//         const last = spreadWords(guessList).length - 1;
//         let cellsContent = {
//           words: guessList.length > 0 ? [...spreadWords(guessList)] : "",
//           rangeCall: range(1, NUM_OF_GUESSES_ALLOWED),
//         };
//         let key = "rangeCall";
//         if (row + 1 <= guessList.length) {
//           key = "words";
//         }

//         {
//           /* console.log("--- words:", spreadWords(guessList)[last]); */
//         }
//         return (
//           <p className="guess" key={row}>
//             {cellsContent["rangeCall"].map((cell, idx) => {
//               console.log("cellsContent[][idx]:", cell);
//               /* cellsContent[key]   */
//               return cell.length > 0 ? (
//                 cellsContent["words"][idx].map((letter, idx2) => (
//                   <span className="cell" key={idx2}>
//                     {letter}
//                   </span>
//                 ))
//               ) : (
//                 <span className="cell" key={idx}>
//                   {cell}
//                 </span>
//               );
//             })}
//           </p>
//         );
//       })}
//     </div>
//   );
// }

export default GuessResults;
/*
- range(0, 6) --> 6 rows
    if (idx <= list.length)
    - list.data --> 5 cells
      <span>
        {W}
      </span>
      <span>
        {O}
      </span>
      <span>
        {R}
      </span>
      <span>
        {L}
      </span>
      <span>
        {D}
      </span>
    else
    - range(0,5) --> 5 cells
      <span>
        {0}
      </span>
      <span>
        {1}
      </span>
      <span>
        {2}
      </span>
      <span>
        {3}
      </span>
      <span>
        {4}
      </span>
      */
