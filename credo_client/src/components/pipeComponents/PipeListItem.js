import React from 'react'

const PipeListItem = ({ pipes }) => {
  const pipeNodes = pipes.map((pipe, index) => {
    return (
        <li key={index}>{pipe.name}  {pipe.lastInspectionDate}  {pipe.location}  {pipe.uniquePipeId}</li>
    )
})
return (
    {pipeNodes}
)
      
}

export default PipeListItem