let a=[10,20,30,40]
let b=[30,40,50,60,70,80]
//create,merge and extend array elelments - using spread
let c = [...a,...b]
console.log(c);
/*[
    10, 20, 30, 40, 30,
    40, 50, 60, 70, 80
  ]
*/