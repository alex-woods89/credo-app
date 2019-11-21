import React, {Component} from 'react'
import PipeListItem from './PipeListItem'

const PipeList = ({pipes}) => {

    const pipeNodes = pipes.map((pipe, index) => {
        return <PipeListItem key ={index} pipe={pipe}/>
    })

    return (
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
    )
  

}

export default PipeList