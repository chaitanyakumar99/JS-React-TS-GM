import React, { useState } from 'react'


const Login = () => {
            let [user,setUser] = useState({uName:"",uPassword:""})
            let uNameHandler = (event)=>{
                setUser({...user,uName:event.target.value})
                //setUser({uName:"Rajni"})
            }    
            let uPasswordHandler = (event)=>{
                setUser({...user,uPassword:event.target.value})
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
                        <input type="text" onChange={uNameHandler} /> <br /><br />
                        <label>Password::::</label>
                        <input type="text" onChange={uPasswordHandler}/> <br />
                        <input type="submit" value={"Login"} />
                    </form>
            </div>
}
export default Login