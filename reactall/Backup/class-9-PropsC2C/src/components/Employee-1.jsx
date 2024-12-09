import React from 'react'

class Employee extends React.Component{
    render(){
        return <div>
                <h1>Employee Component</h1>
                <hr/>
                <pre>{JSON.stringify(this.props)}</pre>
                <h4>Employee Name:{this.props.name}</h4>
                <h4>Employee Name:{this.props.avail * 1}</h4>
                <h4>Salary:{this.props.sal}</h4>
                </div>
    }
}
export default Employee;