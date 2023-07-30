
var numbers = [45, 56, 96, 82, 42, 32, 66, 41, 85, 96];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i]
    if (number > 70) {
        continue;
    }
    console.log(number);
} 