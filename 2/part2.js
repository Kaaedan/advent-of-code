const fs = require('fs');

let data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/)
let horizontalPosition = 0
let depth = 0
let aim = 0

for (let i = 0; i < data.length; i++) {
  let instruction = data[i].split(' ')[0]
  let value = data[i].split(' ')[1]

  if (instruction == 'forward') {
    horizontalPosition += parseInt(value)
    depth += aim*parseInt(value)
  } else if (instruction == 'up') {
    aim -= parseInt(value)
  } else {
    aim += parseInt(value)
  }
}

console.log(horizontalPosition*depth)