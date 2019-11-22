import React, { Component, Fragment } from 'react';
import PipeList from '../components/pipeComponents/PipeList'
import NewPipeForm from '../components/pipeComponents/NewPipeForm'

class PipeContainer extends Component {
   constructor(props){
       super(props)
       this.state= {
           pipes: [],
           selectedPipe: null 
       }
       this.handlePipeSubmit = this.handlePipeSubmit.bind(this)
       this.handlePipeSelected = this.handlePipeSelected.bind(this)
   }

   componentDidMount(){
       fetch('http://localhost:8080/pipes')
       .then(res => res.json())
       .then(data => this.setState({ pipes: data._embedded.pipes }))
   }

   handlePipeSubmit() {
    fetch('http://localhost:8080/pipes')
      .then(res => res.json())
      .then(data => this.setState({ pipes: data._embedded.pipes }))
  }
  handlePipeSelected(index) {
    const pipe = this.state.pipes[index]
    fetch(`http://localhost:8080/pipes/${pipe.id}`)
      .then(res => res.json())
      .then(data => this.setState({ selectedPipe: data }))
  }


    render(){
        return(
            <Fragment>
            <h4>Pipes</h4>
            <PipeList pipes={this.state.pipes} onPipeSelected={this.handlePipeSelected}/>
            <NewPipeForm onPipeSubmit = {this.handlePipeSubmit} />
            </Fragment>

        )
    }
}

export default PipeContainer
