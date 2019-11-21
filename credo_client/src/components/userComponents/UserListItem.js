import React from 'react'

const UserListItem = (props) => {

    return(
        <>
        <tr>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.role}</td>
            <td>{props.user.employeeNumber}</td>
            <td><button>Edit User</button></td>
            <td><button>Delete User</button></td>
        </tr>
        </>
    )
}

export default UserListItem