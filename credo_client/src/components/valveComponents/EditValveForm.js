import React, {Component, Fragment} from 'react'

class EditValveForm extends Component {
       constructor(props){
           super(props);
           const { name, lastInspectionDate, location, uniqueValveId, showForm } = this.props.pipe
           this.state = {
               name: name,
               lastInspectionDate: lastInspectionDate,
               location: location,
               uniqueValveId: uniqueValveId,
               showForm: false
           }
           this.handleNameChange = this.handleNameChange.bind(this)
           this.handleLastInspectionDateChange = this. handleLastInspectionDateChange.bind(this)
           this.handleLocationChange = this.handleLocationChange.bind(this)
           this.handleUniqueValveIdChange = this. handleUniqueValveIdChange.bind(this)
           
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

    handleUniqueValveIdChange(event){
        this.setState({uniqueValveId: event.target.value})
    }



    handleSubmit(event){
        event.preventDefault();
        fetch(`http://localhost:8080/valves/${this.props.valve.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        lastInspectionDate: this.state.lastInspectionDate,
        location: this.state.location,
        uniqueValveId: this.state.uniqueValveId
      })
    })
        .then(() => {
        const name = this.state.name.trim();
        const lastInspectionDate = this.state.lastInspectionDate.trim();
        const location = this.state.location.trim();
        const uniqueValveId = this.state.uniqueValveId;
        if (!name || !lastInspectionDate || !location || !uniqueValveId) {
          return
        }
        // this.props.onPipeSubmit({name:name, lastInspectionDate:lastInspectionDate, location:location, uniquePipeId:uniquePipeId})
        this.setState({name: "", lastInspectionDate: "", location: "", uniqueValveId: ""})
    })
    }

       render(){
           return(
               <Fragment>
            
                
            <h3>Edit Valve Form</h3>
            {this.state.showForm &&
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                placeholder="insert valve name"
                value={this.state.name}
                onChange={this.handleNameChange}
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
                value={this.state.uniqueValveId}
                onChange={this.handleUniqueValveIdChange}
                />

                <button type="submit">Edit Valve</button>


            </form>
       }
        
        </Fragment>

           )
       }


}

export default EditValveForm