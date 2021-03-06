import React from 'react'
import ValveListItem from './ValveListItem'

const ValveList = (props) => {
    
    const valveNodes = props.valves.map((valve, index) => {
        return (
         <>
         <ValveListItem key={index} valve={valve}/>
         
         </>
        )
        

    })
    

    return(
        <table align="center">
        <tbody>
             <tr>
                 <th>Valve Name</th>
                 <th>Last Inspection Date </th>
                 <th>Location</th>
                 <th>Valve Id</th>
                 <th>Delete Valve</th>
             </tr>
             <br/>
             {valveNodes}
             
        </tbody>
       
    </table>
      
    )
}

export default ValveList
