import React from 'react'
import Employee from './Employee';
class User extends React.Component{
    user_Data={
        name:"Rahul Ji",
        loc:["Wayanad","Bangalore","Mysore","Trivendrum"],
        address:{
            city:"Bhopal",
            pin:560038
        }
    }
    render(){
        return <div>
                <h1>User Component</h1>
                <hr />
                <Employee data={this.user_Data} />
                </div>
    }
}
export default User;