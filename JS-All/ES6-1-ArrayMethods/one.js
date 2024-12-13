let nums = [41,2,31,18,7,74,378]
//collect even number into new array.
let even_Nums=nums.filter((num)=>{
    return num%2===0
})
console.log(even_Nums)