let array = [1,7,9,78,5,1,9];


let maxValue = 0;

for (let i = 0; i< array.length; i++) {
    if (maxValue < array[i]) {
            maxValue = array[i];
    }
}

console.log("The maximum value is: " + maxValue);