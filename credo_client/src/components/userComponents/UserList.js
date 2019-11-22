import React from 'react'
import UserListItem from './UserListItem'

const UserList = (props) => {

    const userNodes = props.users.map((user, index) => {
        return <UserListItem key={index} user={user}/>
    })

    return(
        <table align="center">
        <tbody>
             <tr>
                 <th>User First Name</th>
                 <th>User Last Name </th>
                 <th>User Role</th>
                 <th>Employee Number</th>
                 <th>Edit User</th>
                 <th>Delete User</th>
             </tr>
             {userNodes}
        </tbody>
    </table>
    )
}

export default UserList