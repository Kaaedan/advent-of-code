const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n\r?\n/)

const draw = data[0].split(',').map(n => Number(n))
const boards = data.slice(1).map((board) =>
  board.split("\n").map((line) =>
    line
      .trim()
      .split(/ +/)
      .map(n => ({ number: Number(n), marked: false}))
    )
);

const boardWinners = []
const columns = [...Array(boards[0][0].length).keys()];

const isWon = (board) => {
  if (board.some((line) => line.every((n) => n.marked))) return true
  if (columns
    .map((i) => board.map((line) => line[i]))
    .some((column) => column.every((n) => n.marked))) return true
  return false
}

for (const number of draw) {
  boards.forEach(board => {
    board.forEach(line => {
      line
        .filter(n => !n.marked)
        .forEach(n => {
          (n.number === number) && (n.marked = !n.marked)
        })
    })
  })

  boards.forEach((board, index) => {
    if (!boardWinners.includes(index) && isWon(board)) {
      boardWinners.push(index)
    } 
  })

  if (boardWinners.length === boards.length) {
    let sum = 0
    boards[boardWinners[boardWinners.length-1]].flat().forEach(n => !n.marked && (sum += n.number))
    console.log(number*sum)
    return;
  }

}


