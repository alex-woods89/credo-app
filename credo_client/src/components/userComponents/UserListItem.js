import React from 'react'
import EditUserForm from './EditUserForm'

const UserListItem = (props) => {

        function handleDelete(){
            fetch(`http://localhost:8080/users/${props.user.id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            })
        }

    return(
        <>
        <tr>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.role}</td>
            <td>{props.user.employeeNumber}</td>
            <td><button onClick={handleDelete}>Delete User</button></td>
        </tr>

         <div>
          <EditUserForm user={props.user}/>
         </div>
         
        </>
    )
}

export default UserListItem