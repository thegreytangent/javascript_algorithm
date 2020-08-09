// Select the smallest one of the remaining unsorted elements in the array
// inserting the one that has been sorted before.

let array = [60, 50, 95, 80, 70];

for ( let i = 0; i < array.length; i++ ) {

   let fk = i, fv = array[i];

   for ( let x = fk; x < array.length; x++ ) {
     if (array[x] < array[i] ) {
       let temp = array[i];
       array[i] = array[x];
       array[x] = temp;
     }
   }
 }

console.log("Sort using select sort", array);
