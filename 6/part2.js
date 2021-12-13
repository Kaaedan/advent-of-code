const fs = require('fs');


const fishs = fs.readFileSync('input.txt', 'utf-8').split(',').map(n => Number(n))

const days = Array.from({length: 9}, () => 0)
for (let fish of fishs) {
    days[fish]++
}

for (let i = 1; i <= 256; i++) {
    newEightFishCounter = 0
    newSixFishCounter = 0
    for (let day = 0; day < days.length; day++) {
        if (day === 0 ) {
            newSixFishCounter = days[0]
            newEightFishCounter = days[0]
        } else {
            days[day-1] = days[day]
        }
    }

    days[6] += newSixFishCounter
    days[8] = newEightFishCounter
}

const answer = days.reduce( (a,b) => a + b)

console.log(answer)
