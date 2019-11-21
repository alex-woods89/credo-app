import React from 'react'

const ValveListItem = (props) => {
    function handleDelete(){
        fetch(`http://localhost:8080/valves/${props.valve.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
    }

return (
    <>
    <tr>
        <td>{props.valve.name}</td>
        <td>{props.valve.lastInspectionDate}</td>
        <td>{props.valve.location}</td>
        <td>{props.valve.uniquePipeId}</td>
        <td><button>Edit Valve</button></td>
        <td><button onClick={handleDelete}>Delete Valve</button></td>
    </tr>
    </>
)
      
}

export default ValveListItem