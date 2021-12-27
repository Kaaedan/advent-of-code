const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n')

const isOpeningChar = (char) => {
  return (
    char === '(' ||
    char === '[' ||
    char === '{' ||
    char === '<'
  )
}

const getClosingChar = (char) => {
  switch (char) {
    case '{':
      return '}'
    case '[':
      return ']'
    case '(':
      return ')'
    case '<':
      return '>'
    default:
      return ''
  }
}

const getCharScore = (char) => {
  switch (char) {
    case ')':
      return 1
    case ']':
      return 2
    case '}':
      return 3
    case '>':
      return 4
    default:
      return 0
  }
}

let results = []

input.forEach(line => {
  const chars = []
  let i = 0
  let corrupted = false
  while (i < line.length && !corrupted) {
    
    if (isOpeningChar(line.charAt(i))){
      chars.push(getClosingChar(line.charAt(i)))
      // console.log(line.charAt(i))
    } else {
      const lastClosingChar = chars.pop()
      if (line.charAt(i) !== lastClosingChar) {
        corrupted = true
      }
    }
    i += 1
    
  }

  if (!corrupted) {
    console.log(chars)
    results.push(
      chars
        .reverse()
        .reduce((score, char) => score * 5 + getCharScore(char), 0)
    )
  }
  
})

const answer = results.sort((a, b) => a - b)[Math.floor(results.length/2)]

console.log(answer)