import React, {Component, Fragment} from 'react'

class EditPipeForm extends Component {
       constructor(props){
           super(props);
           const { name, lastInspectionDate, location, uniquePipeId, showForm } = this.props.pipe
           this.state = {
               name: name,
               lastInspectionDate: lastInspectionDate,
               location: location,
               uniquePipeId: uniquePipeId,
               showForm: false
           }
           this.handleNameChange = this.handleNameChange.bind(this)
           this.handleLastInspectionDateChange = this. handleLastInspectionDateChange.bind(this)
           this.handleLocationChange = this.handleLocationChange.bind(this)
           this.handleUniquePipeIdChange = this. handleUniquePipeIdChange.bind(this)
           
           this.handleSubmit = this.handleSubmit.bind(this)
       }

    handleNameChange(event){
        this.setState({name: event.target.value})
    }

    handleLastInspectionDateChange(event){
        this.setState({lastInspectionDate: event.target.value})
    }

    handleLocationChange(event){
        this.setState({location: event.target.value})
    }

    handleUniquePipeIdChange(event){
        this.setState({uniquePipeId: event.target.value})
    }



    handleSubmit(event){
        event.preventDefault();
        fetch(`http://localhost:8080/pipes/${this.props.pipe.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        lastInspectionDate: this.state.lastInspectionDate,
        location: this.state.location,
        uniquePipeId: this.state.uniquePipeId
      })
    })
        .then(() => {
        const name = this.state.name.trim();
        const lastInspectionDate = this.state.lastInspectionDate.trim();
        const location = this.state.location.trim();
        const uniquePipeId = this.state.uniquePipeId;
        if (!name || !lastInspectionDate || !location || !uniquePipeId) {
          return
        }
        this.props.onPipeSubmit({name:name, lastInspectionDate:lastInspectionDate, location:location, uniquePipeId:uniquePipeId})
        this.setState({name: "", lastInspectionDate: "", location: "", uniquePipeId: ""})
    })
    }

       render(){
           return(
               <Fragment>
            
                
            <h3>Edit Pipe Form</h3>
            {this.state.showForm &&
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                placeholder="insert pipe name"
                value={this.state.name}
                onChange={this.handlePipeNameChange}
                />

                <input
                type="date"
                placeholder="Choose a date"
                value={this.state.lastInspectionDate}
                onChange={this.handleLastInspectionDateChange}
                />

                <input 
                type="text"
                placeholder="Enter a Location"
                value={this.state.location}
                onChange={this.handleLocationChange}
                />

                <input
                type="number"
                placeholder="Enter pipe ID"
                value={this.state.uniquePipeId}
                onChange={this.handleUniquePipeIdChange}
                />

                <button type="submit">Edit Pipe</button>


            </form>
       }
        
        </Fragment>

           )
       }


}

export default EditPipeForm