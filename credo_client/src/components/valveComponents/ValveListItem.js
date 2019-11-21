import React from 'react'

const ValveListItem = (props) => {
  

return (
    <>
    <tr>
        <td>{props.valve.name}</td>
        <td>{props.valve.lastInspectionDate}</td>
        <td>{props.valve.location}</td>
        <td>{props.valve.uniquePipeId}</td>
        <td><button>Edit Valve</button></td>
        <td><button>Delete Valve</button></td>
    </tr>
    </>
)
      
}

export default ValveListItem