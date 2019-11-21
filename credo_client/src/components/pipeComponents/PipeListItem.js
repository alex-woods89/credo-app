import React from 'react'

const PipeListItem = (props) => {
  

return (
    <>
    <tr>
        <td>{props.pipe.name}</td>
        <td>{props.pipe.lastInspectionDate}</td>
        <td>{props.pipe.location}</td>
        <td>{props.pipe.uniquePipeId}</td>
        <td><button>Edit Pipe</button></td>
        <td><button>Delete Pipe</button></td>
    </tr>
    </>
)
      
}

export default PipeListItem