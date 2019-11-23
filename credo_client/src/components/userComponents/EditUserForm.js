import React, {Component, Fragment} from 'react'

class EditUserForm extends Component {
       constructor(props){
           super(props);
           const { firstName, lastName, role, employeeNumber, id } = this.props.user
           this.state = {
               firstName:firstName,
               lastName: lastName,
               role: role,
               employeeNumber: employeeNumber,
               id: id
           }
           this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
           this.handleLastNameChange = this. handleLastNameChange.bind(this)
           this.handleRoleChange = this.handleRoleChange.bind(this)
           this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this)
           this.handleSubmit = this.handleSubmit.bind(this)
       }

    handleFirstNameChange(event){
        this.setState({firstName: event.target.value})
    }

    handleLastNameChange(event){
        this.setState({lastName: event.target.value})
    }

    handleRoleChange(event){
        this.setState({role: event.target.value})
    }

    handleEmployeeNumberChange(event){
        this.setState({employeeNumber: event.target.value})
    }



    handleSubmit(event){
        event.preventDefault();
        fetch(`http://localhost:8080/users/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        role: this.state.role,
        employeeNumber: this.state.employeeNumber
      })
    })
        .then(() => {
        const firstName = this.state.firstName.trim();
        const lastName = this.state.lastName.trim();
        const role = this.state.role.trim();
        const employeeNumber = this.state.employeeNumber;
        if (!firstName || !lastName || !role || !employeeNumber) {
          return
        }
        // this.props.onPipeSubmit({name:name, lastInspectionDate:lastInspectionDate, location:location, uniquePipeId:uniquePipeId})
        this.setState({firstName: "", lastName: "", role: "", employeeNumber: ""})
    })
    }

       render(){
           return(
            <Fragment>
            <form className="editForm" align="center" onSubmit={this.handleSubmit}>
                <tr>
                    <td>
                <input 
                    type="text"
                    placeholder="insert first name"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                    />
                    </td>
                    
                    <tr>
                    <input 
                    type="text"
                    placeholder="insert last name"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    />
                    </tr>

                    <td>
                    <input 
                    type="text"
                    placeholder="Enter a Role"
                    value={this.state.role}
                    onChange={this.handleRoleChange}
                    />
                    </td>

                    <td>
                    <input
                    type="number"
                    placeholder="Enter Employee Number"
                    value={this.state.employeeNumber}
                    onChange={this.handleEmployeeNumberChange}
                    />
                    </td>

                    <td>
                    <button type="submit">Edit User</button>
                    </td>

                    </tr>
            </form>
        
        </Fragment>

           )
       }
}




export default EditUserForm