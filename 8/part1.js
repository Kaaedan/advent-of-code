const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').toString()
  .trim()
  .split('\r\n')
  .map(line => {
    let [before, after] = line.split(' | ')
    let wires = before.split(' ')
		let outputs = after.split(' ')

		return {
			wires,
			outputs,
		};
  })


let count = 0

input.forEach(signal => {
  signal.outputs.forEach(output => {
    if (output.length == 2 ||
    output.length == 4 ||
    output.length == 3 ||
    output.length == 7) {
      count++
    }
  })
  
})

console.log(count)