import React from 'react'
import ValveListItem from './ValveListItem'

const ValveList = ({ valves }) => {
    
    const valveNodes = valves.map((valve, index) => {
        return <ValveListItem key={index} valve={valve}/>
    })

    return(
        <table align="center">
        <tbody>
             <tr>
                 <th>Valve Name</th>
                 <th>Last Inspection Date </th>
                 <th>Location</th>
                 <th>Valve Id</th>
                 <th>Edit User</th>
                 <th>Delete User</th>
             </tr>
             {valveNodes}
        </tbody>
    </table>
    )
}

export default ValveList
