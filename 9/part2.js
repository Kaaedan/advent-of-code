const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n').map((line) => line.split("").map((n) => ({number: Number(n), read: false})));

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

const getBasinSize = (i,j) => {
  input[i][j].read = true
  return (
    1 +
    directions
      .map(([x,y]) => [i + x, j + y])
      .map(([x,y]) => {
        if (
          input[x] !== undefined &&
          input[x][y] !== undefined &&
          input[x][y].number !== 9 &&
          !input[x][y].read
        ) {
          return getBasinSize(x,y)
        } else {
          return 0
        }
      })
      .reduce((a, b) => a + b)
  )
}

const results = []

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (!input[i][j].read && input[i][j].number !== 9) {
      results.push(getBasinSize(i,j))
    }
  }  
}

const answer = results.sort((a, b) => b - a).splice(0,3).reduce((a,b) => a*b)

console.log(answer)
