const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n').map((line) => line.split("").map((n) => Number(n)));

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

const getAdjacents = (i, j) => {
  return directions
  .filter(([x]) => input[i + x] !== undefined)
  .map(([x,y]) => input[i + x][j + y])
  .filter(x => x !== undefined)
}

const results = []

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (getAdjacents(i,j).every(height => input[i][j] < height)) {
      results.push(input[i][j])
    }
  }
}
const answer = results.map(height => height + 1).reduce((a,b) => a+b)

console.log(answer)
