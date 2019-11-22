import React from 'react'
import PipeListItem from './PipeListItem'


const PipeList = (props) => {

    const pipeNodes = props.pipes.map((pipe, index) => {
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
        </div>
        
    )
  

}

export default PipeList