import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './component/Form'
import List from './component/List'

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      tasks: [{

        description: "Allez au cinéma",
        status: "to do",
    }], 
    }

   

  this.addTask = this.addTask.bind(this);
  this.deleteTask = this.deleteTask.bind(this);
  this.modifyTask = this.modifyTask.bind(this);

  }
  
  addTask(task){
    this.setState({tasks:[{ description: task, status: "To do" },...this.state.tasks]})
    console.log(task)
  }

  deleteTask(index){
    this.state.tasks.splice(index, 1)
    this.setState({tasks:this.state.tasks})

  }
  
  modifyTask(editLine){

    
  }


  render() {
    return (
      <div>
        <Form addTask={this.addTask} />
        <List tasks={this.state.tasks} deleteTask={this.deleteTask} modifyTask={this.modifyTask}/>
      </div>
    )
  } 
}
export default App

