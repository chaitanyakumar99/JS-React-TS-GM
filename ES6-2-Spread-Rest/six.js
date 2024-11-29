let emp={
    eid:101,
    ename:"Rahul",
    esal:45000,
    email:"rg@pm.com"
}
let details={
    email:"rg@gmail.com",
    loc:'New Delhi'
}
let emp_Details={...emp,...details}
console.log(emp_Details);