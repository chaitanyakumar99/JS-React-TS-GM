let cars=[
    {model:'Swift',brand:'Maruthi',price:800000,color:'White'},
    {model:'Dzire',brand:'Maruthi',price:600000,color:'Black'},
    {model:'X1',brand:'BMW',price:5800000,color:'White'},
    {model:'Xuv300',brand:'Mahindra',price:1800000,color:'Black'},
    {model:'Creta',brand:'Hundai',price:2800000,color:'Black'},
    {model:'Fortuner',brand:'Toyota',price:3800000,color:'Pink'},
    {model:'Scorpio',brand:'Mahindra',price:1800000,color:'Pink'},
    {model:'Nano',brand:'TATA',price:100000,color:'Yellow'},
    {model:'Nexon',brand:'TATA',price:1200000,color:'Yellow'},
    {model:'Campass',brand:'JEEP',price:2800000,color:'Red'},
    {model:'Roxx',brand:'Mahindra',price:1800000,color:'Green'},
]
//collect all white color cars in to new Array
//collect all cars their prices below 2000000 in to new Array
//collect all Mahandra - cars into new array
//add 5000 Tax to all cars, and collect into new array

let white_Cars=cars.filter((car)=>{
                                    return car.color ==="White"
                                })
//let white_Cars=cars.filter(car=>car.color ==="White")
console.log(white_Cars)