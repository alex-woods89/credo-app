import React, {Component, Fragment} from 'react'
import ValveList from '../components/valveComponents/ValveList'
import NewValveForm from '../components/valveComponents/NewValveForm'


class ValveContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            valves: []
        }
        this.handleValveSubmit = this.handleValveSubmit.bind(this)
    }

   
    componentDidMount(){
        return this.handleValveSubmit()       
    }

    handleValveSubmit(){
        fetch('http://localhost:8080/valves')
        .then(res => res.json())
        .then(data => this.setState({ valves: data._embedded.valves }))
    }

   render(){
       return(
           <Fragment>
           <h4>Valves</h4>
           <ValveList valves={this.state.valves}/>
           <NewValveForm onValveSubmit={this.handleValveSubmit}/>
           </Fragment>
       )
   }
}

export default ValveContainer