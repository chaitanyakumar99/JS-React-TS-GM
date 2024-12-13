let emp={
    eid:101,
    ename:"Rahul",
    esal:450000.45
}
//read
console.log(emp)
//how to read object values
console.log(emp.eid)
console.log(emp.ename)
console.log(emp.esal)
console.log(emp.email)//undefined
//update
emp.ename = "Rahul Gandhi"
emp.email = 'RG@pm.com'
console.log(emp) 
/*
{
  eid: 101,
  ename: 'Rahul Gandhi',
  esal: 450000.45,
  email: 'RG@pm.com'
}
*/
//delete 
delete emp.esal

console.log(emp) 
//{ eid: 101, ename: 'Rahul Gandhi', email: 'RG@pm.com' }