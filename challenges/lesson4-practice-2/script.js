var playTime = [2, 2, 3, 3, 1, 4, 5]

var totalPlayTime = 0
var timeLimit = 2
var exceededCount = 0

for (var i = 0; i < playTime.length; i++) {
    totalPlayTime += playTime[i]
    if (playTime[i] > timeLimit) {
        exceededCount++
    }
}

console.log("Total play time: " + totalPlayTime + " hours")
console.log("Number of times exceeded the game time limit: " + exceededCount + " times")
