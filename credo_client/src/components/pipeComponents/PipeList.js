import React, {Component} from 'react'
import PipeListItem from './PipeListItem'

const PipeList = ({pipes}) => {

    const pipeNodes = pipes.map((pipe, index) => {
        return <li key={index}>{pipe.name}</li>
    })

    return (
        <ul>
            {pipeNodes}
        </ul>
    )
  

}

export default PipeList