const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let activePlayer = "X";

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    cell.innerHTML = activePlayer;
    checkForWin();
    checkForDraw();
    switchPlayer();
    const turn = document.querySelector(".turn");
    turn.innerHTML = activePlayer;
  });
});

function switchPlayer() {
  if (activePlayer === "X") {
    activePlayer = "O";
  } else {
    activePlayer = "X";
  }
}

function checkForWin() {
  winningCombinations.forEach((combination) => {
    const firstCellIndex = combination[0];
    const secondCellIndex = combination[1];
    const thirdCellIndex = combination[2];
    if (
      cells[firstCellIndex].innerHTML === cells[secondCellIndex].innerHTML &&
      cells[secondCellIndex].innerHTML === cells[thirdCellIndex].innerHTML &&
      cells[firstCellIndex].innerHTML !== "" 
    ) {
      alert("Player " + activePlayer + " won!");
      window.location.reload();
    }
  });
  console.log(cells[0]);
}
 function checkForDraw () {
    let hasEmptyCells = false;
    cells.forEach(cell => {
      if (cell.innerHTML === '') {
        hasEmptyCells = true;
      }
    });
    if (!hasEmptyCells) {
      alert("It's a draw");
      window.location.reload();
    }
 }