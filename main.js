console.log("Chapter 2");

// Looping a triangle
console.log("--------");
console.log("Looping a triangle");

var character = '#';
var triangle = '';
var size = 7;
for (i = 0; i < size; i++) {
    console.log(triangle += character)
}


// Looping a triangle
console.log("--------");
console.log("Looping a flipped triangle as variable");

var size = 7;
var character = '#';
var spacer = " ";
var spaces, triangle = '';
var display = '';
for (i = 0; i < size; i++) {
    spaces = spacer.repeat(size-i)
    display += (spaces + (triangle += character)) + "\n";
}
console.log(display)


// FizzBuzz
console.log("--------");
console.log("FizzBuzz");

for (i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz')
    }

    if (i % 3 == 0){
        console.log('Fizz')
    }else if(i % 5 == 0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}

// Chessboard
console.log("--------");
console.log("Chessboard");

var tile = 8;
var rows = columns = tile;
var chessboard = '';

for (x=0; x < rows; x++) {
    for (y=0; y < columns; y++) {
        if (x%2==0){
            if (y%2==0){
                chessboard += ' ';
            }else{
                chessboard += '#';                
            }
        }else{
            if (y%2==0){
                chessboard += '#';                
            }else{
                chessboard += ' ';
            }
        }
    }
    chessboard += '\n';
}
console.log(chessboard);