import React from 'react'

const Message = () => {
    let [msg,setMsg]=React.useState("Hello");
    
  return <div>
        <h3>Message component</h3>
        <h4>Message Value:{msg}</h4>
        <button onClick={()=>{
            setMsg("Good Morning")
        }}>GM</button>
        <button onClick={()=>{
            setMsg("Good Night")
        }}>GN</button>
        </div>
}
export default Message