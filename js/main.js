let activePlayer = "x"

const cells = document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener("click", function() {
        cell.innerHTML = activePlayer
        switchPlayer() 
        console.log(activePlayer)
    }) 
});

function switchPlayer () {
    if (activePlayer === "x") {
        activePlayer = "0"
    }
    else {
        activePlayer = "x"
    }
}