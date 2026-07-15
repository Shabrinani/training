var x = prompt("Enter X position: ")
var y = prompt("Enter Y position: ")

if (x > 0 && y > 0) {
    console.log("The player is on the top right")
} else if (x < 0 && y < 0) {
    console.log("The player is on the bottom left")
} else if (x > 0 && y < 0) {
    console.log("The player is on the bottom right")
} else if (x < 0 && y > 0) {
    console.log("The player is on the top left")
} else {
    console.log("The player is on the center")
}