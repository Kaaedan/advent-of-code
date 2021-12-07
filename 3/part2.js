const fs = require('fs');

let data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/)

let bitToKeep = ''

const findRating = (currArr, bitPosition, bitBalance, bitCriteria) => {
  //Count the number of positive bit in every position
  for (let i = 0; i < currArr.length; i++) {
    for (let j = bitPosition; j < bitPosition + 1; j++) {
      if (bitBalance[j] === undefined) {
        bitBalance[j] = parseInt(currArr[i].charAt(j))
      } else {
        bitBalance[j] += parseInt(currArr[i].charAt(j))
      }
    }
  }
  //Defining the bit to keep depending on the bitBalance and bitCriteria
  if (bitCriteria == 'oxyGenRating') {
    bitToKeep = `${bitBalance[bitPosition] >= Math.floor(currArr.length)/2 ? 1 : 0}`
  } else {
    bitToKeep = `${bitBalance[bitPosition] < Math.floor(currArr.length)/2 ? 1 : 0}`
  }

  let newArr = currArr.filter(el => el.charAt(bitPosition) === bitToKeep)

  if (newArr.length === 1) {
    return newArr[0]
  } else {
    return findRating(newArr, bitPosition + 1, bitBalance, bitCriteria)
  }
}

const oxyGenRating = findRating(data, 0, [], 'oxyGenRating')
const co2GenRating = findRating(data, 0, [], 'co2GenRating')
console.log(parseInt(oxyGenRating, 2)*parseInt(co2GenRating, 2))

