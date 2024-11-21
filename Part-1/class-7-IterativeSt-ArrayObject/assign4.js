//print no of even numbers and odd numbers from given array
let numbers=[4,1,41,31,14,378,71,98,141]
let even_Count=0;
let odd_Count=0;
for(let num of numbers){
   if(num%2 ===0){
    even_Count++;
   }else{
    odd_Count++;
   }
}
console.log("No of Evens:"+even_Count)
console.log("No of Odd:"+odd_Count)