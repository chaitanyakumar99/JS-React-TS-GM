import React from "react";
class Message extends React.Component{
    //msg="Hello" - convert property to state object property
    state={
        msg:"Hello"
    }
    gmHandler = ()=>{
        this.setState({msg:"Good Morning"})
    }
    gnHandler = ()=>{
        this.setState({msg:"Good Night"})
    }
    render(){
        console.log("Test Case 123")
        return <div>
                    <h3>Message Component</h3>
                     <hr/>
                     <h2>Value:{this.state.msg}</h2>
                     <button onClick={this.gmHandler}>GM</button>
                     <button onClick={this.gnHandler}>GN</button>
                </div>
    }
}
export default Message