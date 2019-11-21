import React, {Component, Fragment} from 'react'
import ValveList from '../components/valveComponents/ValveList'

class ValveContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            valves: [],
            selectedValve: null
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/valves')
        .then(res => res.json())
        .then(data => this.setState({ valves: data._embedded.valves }))
    }

   render(){
       return(
           <Fragment>
           <h4>Valves</h4>
           <ValveList valves={this.state.valves}/>
           </Fragment>
       )
   }
}

export default ValveContainer