import React, {Component, Fragment} from 'react'
import UserList from '../components/userComponents/UserList'

class UserContainer extends Component{
     constructor(props){
         super(props)
         this.state = {
             users: [],
             selectedUser:null
         }
     }

     componentDidMount(){
        fetch('http://localhost:8080/users')
        .then(res => res.json())
        .then(data => this.setState({ users: data._embedded.users }))
    }
render(){
    return(
        <Fragment>
        <h4>Users</h4>
        <UserList users={this.state.users}/>
        </Fragment>
    )
}
}

export default UserContainer