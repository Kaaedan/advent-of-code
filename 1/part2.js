const fs = require('fs');

let measurements
let increased = 0

measurements = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/)
measurements = measurements.map( (x) => { return parseInt(x, 10) })

for (let i = 0; i < measurements.length; i++) {
  let a = measurements[i]
  let b = measurements[i+1]
  let c = measurements[i+2]
  let d = measurements[i+3]

  let current = a + b + c
  let next = b + c + d

  if (next > current) {
    increased++
  }
}
console.log(increased)
