const fs = require('fs');

let measurements
let increased = 0

measurements = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/)
measurements = measurements.map( (x) => { return parseInt(x, 10) })

let last = 0
for (const i in measurements) {
  if (measurements[i] > measurements[last]) {
    increased++
  }
  last = i
}
console.log(increased)
