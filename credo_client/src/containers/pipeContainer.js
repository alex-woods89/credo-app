import React, { Component, Fragment } from 'react';
import PipeList from '../components/pipeComponents/PipeList'

class PipeContainer extends Component {
   constructor(props){
       super(props)
       this.state= {
           pipes: [],
           selectedPipe: null 
       }
   }

   componentDidMount(){
       fetch('http://localhost:8080/pipes')
       .then(res => res.json())
       .then(data => this.setState({ pipes: data._embedded.pipes }))
   }


    render(){
        return(
            <Fragment>
            <h4>Pipes</h4>
            <PipeList pipes={this.state.pipes} />
            </Fragment>

        )
    }
}

export default PipeContainer
