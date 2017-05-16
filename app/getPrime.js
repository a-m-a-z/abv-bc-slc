'use strict';
  function getPrime(num) {
if (num < 0)
return ["invalid"];

    if (num <= 3)
    return [num];

     let array = [], upperLimit = Math.sqrt(num), output = [];

     for (let i = 0; i < num; i++) {
         array.push(true);
     }


     for (let i = 2; i <= upperLimit; i++) {
         if (array[i]) {
             for (let j = i * i; j < num; j += i) {
                 array[j] = false;
             }
         }
     }


     for (let i = 2; i < num; i++) {
         if(array[i]) {
             output.push(i);
         }
     }

     return output;
 }
