import React from 'react'
import EditPipeForm from './EditPipeForm'

const PipeListItem = (props) => {
     

   
        function handleDelete(){
            fetch(`http://localhost:8080/pipes/${props.pipe.id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            })
        }

  

return (
    <>
    <tr>
        <td>{props.pipe.name}</td>
        <td>{props.pipe.lastInspectionDate}</td>
        <td>{props.pipe.location}</td>
        <td>{props.pipe.uniquePipeId}</td>
        <td><button onClick={handleDelete}>Delete Pipe</button></td>
        
    </tr>
      
    <div className="editForm"align="center">
    <EditPipeForm pipe={props.pipe}/>
    </div>

    </>
)
      
}

export default PipeListItem