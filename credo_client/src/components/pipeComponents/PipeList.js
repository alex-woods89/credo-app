import React, {Component} from 'react'
import PipeListItem from './PipeListItem'
import EditPipeForm from './EditPipeForm'

const PipeList = ({pipes}) => {

    const pipe = pipes.map((pipe, index) => {
        return pipe 
    })

    const pipeNodes = pipes.map((pipe, index) => {
        return <PipeListItem key ={index} pipe={pipe}/>
    })

    return (
        <div>
        <table align="center">
            <tbody>
                 <tr>
                     <th>Pipe Name</th>
                     <th>Last Inspection Date</th>
                     <th>Location</th>
                     <th>Pipe ID</th>
                     <th>Edit Pipe</th>
                     <th>Delete Pipe</th>
                 </tr>
                 {pipeNodes}
            </tbody>
        </table>
        <EditPipeForm pipe={pipe} />
        </div>
        
    )
  

}

export default PipeList