import React, {Component, Fragment} from 'react'
import UserList from '../components/userComponents/UserList'
import NewUserForm from '../components/userComponents/NewUserForm'

class UserContainer extends Component{
     constructor(props){
         super(props)
         this.state = {
             users: []
         }
         this.handleUserSubmit = this.handleUserSubmit.bind(this)
     }

     componentDidMount(){
        return this.handleUserSubmit()
        // fetch('http://localhost:8080/users')
        // .then(res => res.json())
        // .then(data => this.setState({ users: data._embedded.users }))
    }

     handleUserSubmit(){
        fetch('http://localhost:8080/users')
        .then(res => res.json())
        .then(data => this.setState({ users: data._embedded.users }))
    }
     

render(){
    return(
        <Fragment>
        <h4>Users</h4>
        <UserList users={this.state.users}/>
        <NewUserForm onUserSubmit={this.handleUserSubmit} />
        </Fragment>
    )
}
}

export default UserContainer