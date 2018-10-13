var message = "Hello World: This is a statement"
// console.log(message + " " + 1);
// console.log(message + " " + 2);
// console.log(message + " " + 3);
// console.log(message + " " + 4);
// console.log(message + " " + 5);
// console.log(message + " " + 6);
// console.log(message + " " + 7);
// console.log(message + " " + 8);

var number = 99;

// Demonstrate how to use a loop
// while(number <= 100) {
//     console.log(message + " " + number)
//     number = number + 1;
// }

var lyric = "bottles of beer on the wall,"
var lyric1 = "bottles of beer, take one down and pass it around, "
var lyric2 = "bottles of beer on the wall."

// while(number > 1) {
//     console.log(number + " " + lyric + " " + number + " " + lyric1)
//     number--;
//     console.log(number + " " + lyric2)
// }

for(var num = 99; num > 0; num--) {
    console.log(num + " bottles of beer on the wall");
    console.log(num + " bottles of beer");
    console.log("Take one down, and pass it around");

    if((num - 1) != 0) {
    console.log((num - 1) + " bottles of beer on the wall");
    }
    else {
        console.log("No more bottles of beer on the wall")
    }

    console.log(" ");
}