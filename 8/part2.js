const fs = require('fs')

const input = fs.readFileSync('input_test.txt', 'utf-8').toString()
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
