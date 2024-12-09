import React from 'react'
import Employee from './Employee';
class User extends React.Component{
    userName="Rahul";
    avail=true;
    sal = 45000.45;
    render(){
        return <div>
                <h1>User Component</h1>
                <hr />
                <Employee name={this.userName} avail={this.avail} sal={this.sal}/>
                </div>
    }
}
export default User;