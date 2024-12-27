import React, { useState } from 'react'


const Login = () => {
            let [user,setUser] = useState({uName:"",uPassword:""})
            let UpdateHandler = (event)=>{
                setUser({...user,[event.target.name]:event.target.value})
            } 
            let submitHandler = (event)=>{
                event.preventDefault()
                console.log(user)
            }
            return <div>
                    <br />
                    <pre>{JSON.stringify(user)}</pre>
                    <br />
                    <h2>Login Details</h2>
                    <form onSubmit={submitHandler}>
                        <label>User Name:</label>
                        <input name="uName" type="text" onChange={UpdateHandler} /> <br /><br />
                        <label>Password::::</label>
                        <input name="uPassword" type="text" onChange={UpdateHandler}/> <br />
                        <input type="submit" value={"Login"} />
                    </form>
            </div>
}
export default Login