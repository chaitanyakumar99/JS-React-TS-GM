let CompB=(nt)=>{

    return  <div>
                <h3>Component B</h3>
                <pre>{JSON.stringify(nt)}</pre>
                <h4>Employee Id:{nt.id}</h4>
                <h4>Employee Name:{nt.name}</h4>
                <h4>Employee Loc:{nt.loc}</h4>
                <h4>Employee Loc:{nt.loc[1]}</h4>
                
                
                <hr/>
            </div>
}
export default CompB