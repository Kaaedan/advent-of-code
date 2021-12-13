const fs = require('fs');


const fishs = fs.readFileSync('input_test.txt', 'utf-8').split(',').map(n => ({day: Number(n), born: -1}))


for (let i = 1; i <= 80; i++) {
  fishs.forEach(fish => {
    if (fish.day == 0 && fish.born != i){
      fish.day = 6
      fishs.push({day: 8, born: i})
    } else if (fish.born != i){
      fish.day--
    }
  });
}

console.log(fishs.length)
