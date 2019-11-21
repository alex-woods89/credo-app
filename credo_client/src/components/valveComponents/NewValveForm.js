import React, {Component} from 'react'

class NewValveForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastInspectionDate: "",
            location: "",
            uniqueValveId: null

        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLastInspectionDateChange = this.handleLastInspectionDateChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleUniqueValveIdChange = this.handleUniqueValveIdChange.bind(this);
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
        fetch('http://localhost:8080/valves', {
      method: 'POST',
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
      .then(() =>  {
        const name = this.state.name.trim();
        const lastInspectionDate = this.state.lastInspectionDate.trim();
        const location = this.state.location.trim();
        const uniqueValveId = this.state.uniqueValveId;
        if (!name || !lastInspectionDate || !location || !uniqueValveId) {
          return
        }
        this.props.onValveSubmit({name:name, lastInspectionDate:lastInspectionDate, uniqueValveId:uniqueValveId, location:location})
        this.setState({name: "", lastInspectionDate: "", uniqueValveId: "", location: ""})
    }) 
    }

    render(){
        return(
            <div>
                <h3>New Valve Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    placeholder="Insert Valve Name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    />

                    <input 
                    type="date"
                    placeholder="Insert Last Inspection Date"
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
                    placeholder="Enter Valve ID"
                    value={this.state.uniqueValveId}
                    onChange={this.handleUniqueValveIdChange}
                    />

                    <button type="submit">Submit New Valve</button>


                </form>
            </div>
        )
    }

}

export default NewValveForm
