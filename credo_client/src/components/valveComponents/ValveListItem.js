import React from 'react'
import EditValveForm from './EditValveForm'

const ValveListItem = (props) => {
    function handleDelete(){
        fetch(`http://localhost:8080/valves/${props.valve.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
    }

return (
    
    <>
    <tr align="center">
        <td>{props.valve.name}</td>
        <td>{props.valve.lastInspectionDate}</td>
        <td>{props.valve.location}</td>
        <td>{props.valve.uniqueValveId}</td>
        <td><button onClick={handleDelete}>Delete Valve</button></td>
        <br/>
        

    </tr>

    

    <div className="editForm"align="center">
    <EditValveForm valve={props.valve}/>
    </div>
    </>
)
      
}

export default ValveListItem