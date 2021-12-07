const fs = require('fs');

let data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/)

let gamma = ''
let epsilon = ''
let result = []

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if (result[j] === undefined) {
      result[j] = parseInt(data[i].charAt(j))
    } else {
      result[j] += parseInt(data[i].charAt(j))
    }
  }
}

result.forEach((occurence) => {
  gamma += `${occurence >= Math.floor(data.length)/2 ? 1 : 0}`
  epsilon += `${occurence < Math.floor(data.length)/2 ? 1 : 0}`
})

console.log(parseInt(gamma, 2)*parseInt(epsilon, 2))

