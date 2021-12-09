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

const columns = [...Array(boards[0][0].length).keys()];

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

  const winner = boards.find(
    (board) =>
      board.some((line) => line.every((n) => n.marked)) ||
      columns
        .map((i) => board.map((line) => line[i]))
        .some((column) => column.every((n) => n.marked))
  );
  
  if (winner) {
    let sum = 0
    winner.flat().forEach(n => !n.marked && (sum += n.number))
    console.log(number*sum)
    return;
  }

}


