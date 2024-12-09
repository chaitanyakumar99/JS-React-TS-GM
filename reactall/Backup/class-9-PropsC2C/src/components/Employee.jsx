import React from 'react'

const Employee = (props) => {
  return <>
            <h4>Employee Component</h4>
            <pre>{JSON.stringify(props)}</pre>
            <h4>PIN Code:{props.data.address.pin}</h4>
        </>
}

export default Employee;