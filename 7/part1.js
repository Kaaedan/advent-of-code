const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split(',').map(n => Number(n))

const highestPos = Math.max(...input)
let result = []

for (let i = 0; i < highestPos; i++) {
  let cost = 0
  input.forEach(crabPos => {
    cost += Math.abs(i - crabPos)
  })
  result.push(cost)
}

console.log(Math.min(...result))