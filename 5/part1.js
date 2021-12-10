const fs = require('fs');


const data = fs.readFileSync('input.txt', 'utf-8').split(/\r\n/).map(line => line.split(' -> ').map(coord => coord.split(',').map(n => Number(n)))).filter(([[x1, y1], [x2, y2]]) => x1 === x2 || y1 === y2);

const coordinateOccurences = {};

const addVentCoordinates = ([[x1,y1], [x2,y2]]) => {
  if (x1==x2){
    const startIndex = y1 > y2 ? y2 : y1
    const length = Math.abs(y1-y2) + 1
    const arr = []
    for (let i = startIndex; i < length + startIndex; i++) {
      arr.push(x1 + ',' + i)
    }
    return arr
  } else {
    const startIndex = x1 > x2 ? x2 : x1
    const length = Math.abs(x1-x2) + 1
    const arr = []
    for (let i = startIndex; i < length + startIndex; i++) {
      arr.push(i + ',' + y1)
    }
    return arr
  }
}

data.forEach(segment => {
  addVentCoordinates(segment).forEach(coord => {
    if (coordinateOccurences[coord]) {
      coordinateOccurences[coord] += 1
    } else {
      coordinateOccurences[coord] = 1
    }
  })
})

const overlaps = Object.keys(coordinateOccurences).filter(coord => coordinateOccurences[coord] > 1)

console.log(overlaps.length)