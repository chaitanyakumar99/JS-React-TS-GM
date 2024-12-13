let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000}
]
let createEmployee=(emp)=>{
   return new Promise((resovle,reject)=>{
    setTimeout(()=>{
        let flag=true;
        flag ?  resovle("Data Inserted"): reject("Failed")
        employees.push(emp)
    },4000)
   });
}
let getEmployees=()=>{
    setTimeout(()=>{
        let rows="";
        employees.forEach((emp)=>{
            rows= rows+`
                      <tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                      </tr>  
                      `
        })
        document.getElementById('abc').innerHTML=rows
        //document.getElementById('abc').innerHTML="GM"
    },1000)
}
let execute =async ()=>{
   await createEmployee({eid:103,ename:"Priyanka",esal:65000})
    getEmployees()
}
execute()