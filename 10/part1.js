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
      return 3
    case ']':
      return 57
    case '}':
      return 1197
    case '>':
      return 25137
    default:
      return 0
  }
}

let result = 0

input.forEach(line => {
  const chars = []
  for (const char of line) {
    if (isOpeningChar(char)){
      chars.push(char)
    } else {
      const lastOpeningChar = chars.pop()
      if (char !== getClosingChar(lastOpeningChar)) {
        result += getCharScore(char)
      }
    }
  }
})

console.log(result)